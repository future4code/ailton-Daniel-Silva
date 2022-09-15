import { BaseError } from "./BaseError";

export class InvalidPassword extends BaseError {
  constructor() {
    super("Your password must have 6 characters!", 401);
  }
}
