import { BaseError } from "./BaseError";

export class InvalidCredencial extends BaseError {
  constructor() {
    super("Email or password incorrect ", 401);
  }
}
