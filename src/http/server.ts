import { createServer, IncomingMessage } from "http";
import Router from "find-my-way";
import config from "../config";
import { ResponseData } from "./ResponseData";
import { HttpError } from "./errors/HttpError";
import { InternalServerError } from "./errors/Errors";

export const router = Router();

export const server = createServer(async (req, res) => {
  let response;
  logRequests(req);

  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "*");
  // res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Content-Type", "application/json;charset=utf-8");

  try {
    const result = await router.lookup(req, res);
    response = new ResponseData(result);
  } catch (error: any) {
    if (error instanceof HttpError) {
      response = error;
    } else {
      response = new InternalServerError(error.message);
      console.error(error);
    }
  }

  res.statusCode = response.code;
  res.end(JSON.stringify(response));
});

function logRequests(req: IncomingMessage) {
  if (config.ENV !== "dev") return;

  console.log(`${req.method} ${decodeURIComponent(req.url!)}`);
  // if (!["GET", "DELETE"].includes(req.method!)) console.log(req.body);
}
