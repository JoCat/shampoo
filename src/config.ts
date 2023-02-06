import dotenv from "dotenv";

dotenv.config();

const env = (key: string, _default: string) => process.env[key] || _default;
// const envNum = (key: string, _default: number) =>
//   Number(process.env[key]) || _default;
// const envBool = (key: string, _default: boolean) =>
//   process.env[key] ? process.env[key] === "true" : _default;

export default {
  ENV: env("ENV", "production"),
  AUTH_TOKEN: env("AUTH_TOKEN", "testToken"),
};
