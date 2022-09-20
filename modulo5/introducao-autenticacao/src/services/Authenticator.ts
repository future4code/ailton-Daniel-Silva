import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export type AuthenticationData = {
  id: string;
};
export class Authenticator {
  generateToken(id: string): string {
    const token = jwt.sign(
      {
        id: id,
      },
      "eu",
      {
        expiresIn: "5hr",
      }
    );

    return token;
  }

  verifyToken(token: string) {
    const verify = jwt.verify(token,"eu") as any;

    return verify.id;
  }
}

