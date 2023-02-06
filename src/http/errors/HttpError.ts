export class HttpError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message || "Http error");
    this.name = this.constructor.name;
    this.code = code;
  }

  toJSON() {
    return {
      meta: {
        status: false,
        code: this.code,
        message: this.message,
      },
      data: false,
    };
  }
}
