import { BaseError } from "./BaseError";

export class InvalidId extends BaseError {
  constructor() {
    super("Invalid ID!", 401);
  }
}
