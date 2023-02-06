import { ErrorBuilder } from "./ErrorBuilder";

export const BadRequestError = ErrorBuilder(
  "BadRequestError",
  "Bad Request",
  400
);
export const UnauthorizedError = ErrorBuilder(
  "UnauthorizedError",
  "Unauthorized",
  401
);
export const ForbiddenError = ErrorBuilder("ForbiddenError", "Forbidden", 403);
export const NotFoundError = ErrorBuilder("NotFoundError", "Not Found", 404);
export const InternalServerError = ErrorBuilder(
  "InternalServerError",
  "Internal Server Error",
  500
);
