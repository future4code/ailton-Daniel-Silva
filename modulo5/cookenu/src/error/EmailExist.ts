import { BaseError } from "./BaseError";

export class EmailExist extends BaseError {
  constructor() {
    super("Email already exists", 404);
  }
}
