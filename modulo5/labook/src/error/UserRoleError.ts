import { BaseError } from "./BaseError";

export class UserRoleError extends BaseError {
  constructor() {
    super("Role must be ADMIN or NORMAL", 401);
  }
}
