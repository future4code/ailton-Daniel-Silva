import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
  constructor() {
    super("You need to pass all the parameters", 404);
  }
}
