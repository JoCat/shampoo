import { IncomingMessage } from "http";
import parse from "co-body";

export function parseBody(req: IncomingMessage) {
  if (!req.headers["content-type"]) return null;

  if (req.headers["content-type"].includes("application/json"))
    return parse.json(req);

  if (req.headers["content-type"].includes("application/x-www-form-urlencoded"))
    return parse.form(req);
}
