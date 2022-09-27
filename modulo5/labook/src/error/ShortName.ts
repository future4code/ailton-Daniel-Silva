import { BaseError } from "./BaseError";

export class ShortName extends BaseError {
  constructor() {
    super("Your name must have at least 3 characters ", 401);
  }
}
