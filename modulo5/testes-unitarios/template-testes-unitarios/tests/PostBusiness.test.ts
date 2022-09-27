import { PostBusiness } from "../src/business/PostBusiness"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"
import { ICreatePostInputDTO, IGetPostsInputDTO, Post } from "../src/models/Post"

describe("Testando o PostBusiness", () => {
    const postBusiness = new PostBusiness(
      new PostDatabaseMock(),
      new IdGeneratorMock(),
      new AuthenticatorMock()
    )

    test("Verificando a criação de post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-admin",
            content: "Weeeeeeeee"
        }

        const response = await postBusiness.createPost(input)
        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Weeeeeeeee")
    })

    test("Verificando a lista de posts", async () => {
        const input: IGetPostsInputDTO = {
          token: "token-mock-admin",
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(4)
    })
})