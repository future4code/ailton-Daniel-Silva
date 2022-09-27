import { BaseError } from "./BaseError";

export class EmailExist extends BaseError {
  constructor() {
    super("This email already exists", 401);
  }
}
