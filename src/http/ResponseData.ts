export class ResponseData {
  data: any;
  code: number;

  constructor(data: any) {
    this.data = data !== undefined ? data : true;
    this.code = 200;
  }

  toJSON() {
    return {
      meta: {
        status: true,
        code: this.code,
        message: false,
      },
      data: this.data,
    };
  }
}
