import express, { Response, Request } from "express";
import cors from "cors";
import { Product, arrayProducts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (request: Request, response: Response) => {
  try {
    response.send("API está funcional");
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});

app.post("/createProduct", (request: Request, response: Response) => {
  try {
    const { id, name, price } = request.body;

    const newProduct: Product = {
      id: arrayProducts.at(-1)?.id + "1",
      name,
      price,
    };

    if (!name || !price) {
      response.statusCode = 422;
      throw new Error("Digite o nome e o preço do produto corretamente!");
    } else if (price <= 0) {
      response.statusCode = 422;
      throw new Error("O preço deve ser maior que zero!");
    } else if (typeof name !== "string") {
      response.statusCode = 401;
      throw new Error("O nome deve ser uma string!");
    } else if (typeof price !== "number") {
      response.statusCode = 401;
      throw new Error("O preço deve ser um número!");
    }

    arrayProducts.push(newProduct);

    response.send(arrayProducts);
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});

app.get("/returnProducts", (request: Request, response: Response) => {
  try {
    response.send(arrayProducts);
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});

app.put("/changeProduct/:id", (request: Request, response: Response) => {
  try {
    const { price, id } = request.body;

    if (!price) {
      response.statusCode = 422;
      throw new Error("Digite um valor válido para o preço!");
    } else if (typeof price !== "number") {
      response.statusCode = 401;
      throw new Error("O preço deve ser um número!");
    } else if (price <= 0) {
      response.statusCode = 422;
      throw new Error("O valor de preço deve ser maior que zero!");
    }

    const productIndex = arrayProducts.findIndex((product) => {
      return product.id === request.params.id;
    });

    if (productIndex === -1) {
      response.statusCode = 404;
      throw new Error(
        `O produto com o id ${request.params.id} não foi encontrado`
      );
    }

    arrayProducts[productIndex].price = price;

    response.send(arrayProducts);
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});

app.delete("/deleteProduct/:id", (request: Request, response: Response) => {
  try {
    const productIndex = arrayProducts.findIndex((product) => {
      return product.id === request.params.id
    })

    if (productIndex === -1) {
        response.statusCode = 404
        throw new Error(`O produto de index ${request.params.id} não foi encontrado!`)
    }

    const filterProduct = arrayProducts.filter((product) => {
      return product.id !== request.params.id
    })

    response.send(filterProduct);
  } catch (error: any) {
    response
      .status(response.statusCode || 500)
      .send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
