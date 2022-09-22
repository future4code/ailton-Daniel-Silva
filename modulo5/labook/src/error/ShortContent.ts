import { BaseError } from "./BaseError";

export class ShortContent extends BaseError {
  constructor() {
    super("Your content must have at least 1 character ", 401);
  }
}
