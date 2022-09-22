import { BaseError } from "./BaseError";

export class ShortPassword extends BaseError {
  constructor() {
    super("Your passoword must have at least 6 characters ", 401);
  }
}
