import { BaseError } from "./BaseError";

export class InvalidToken extends BaseError {
  constructor() {
    super("Your must pass your authorization!", 401);
  }
}
