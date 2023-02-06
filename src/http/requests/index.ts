import { router } from "../server";

router.get("/", () => {
  return { hello: "world" };
});
