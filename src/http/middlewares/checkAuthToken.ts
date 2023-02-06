import { IncomingMessage } from "http";
import config from "../../config";
import { ForbiddenError, UnauthorizedError } from "../errors/Errors";

export function checkAuthToken(req: IncomingMessage) {
  let token = req.headers.authorization;
  if (!token) throw new UnauthorizedError("Auth token required");

  if (token.startsWith("Bearer")) token = token.slice(7);

  if (token !== config.AUTH_TOKEN) {
    throw new ForbiddenError("Invalid auth token");
  }
}
