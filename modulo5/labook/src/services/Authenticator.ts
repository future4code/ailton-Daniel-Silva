import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ITokenPayload, USER_ROLES } from "../model/User";

dotenv.config();

export interface AuthenticationData {
  id: string;
  role: USER_ROLES
}

export class Authenticator {
  public generateToken(payload: ITokenPayload): string {
    const token = jwt.sign(
      {
        payload,
      },
      String(process.env.JWT_KEY),
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );

    return token;
  }

  public verifyToken(token: string): ITokenPayload {
    const verify = jwt.verify(token, String(process.env.JWT_KEY)) as any

    return verify.payload as ITokenPayload
  }
}
