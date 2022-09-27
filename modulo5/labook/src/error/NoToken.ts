import { BaseError } from "./BaseError";

export class NoToken extends BaseError {
  constructor() {
    super("You must have a token", 404)
  }
}
