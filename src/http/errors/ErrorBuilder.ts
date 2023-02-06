import { HttpError } from "./HttpError";

export function ErrorBuilder(
  className: string,
  defautMessage: string,
  defaultCode: number
) {
  return class extends HttpError {
    constructor(message: string) {
      super(message || defautMessage, defaultCode);
      this.name = className;
    }
  };
}
