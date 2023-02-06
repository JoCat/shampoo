import { currentTrack } from "../../data/track";
import { checkAuthToken } from "../middlewares/checkAuthToken";
import { parseBody } from "../middlewares/parseBody";
import { router } from "../server";

router.get("/currentTrack", () => currentTrack);

router.post("/currentTrack", async (req) => {
  checkAuthToken(req);

  const { album, artist, title } = await parseBody(req);

  currentTrack.artist = artist || "Неизвестный";
  currentTrack.title = title || "Без названия";
  currentTrack.album = album || "Без альбома";

  // TODO Send new track info to ws clients
});
