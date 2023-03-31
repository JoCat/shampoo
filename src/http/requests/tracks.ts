import { tracksList, type Track } from "../../data/tracksList";
import { checkAuthToken } from "../middlewares/checkAuthToken";
import { parseBody } from "../middlewares/parseBody";
import { router } from "../server";

// @dep
router.get("/currentTrack", tracksList.getLastTrack);

// @dep
router.post("/currentTrack", async (req) => {
  checkAuthToken(req);

  const { album, artist, title } = await parseBody(req);

  const track: Track = {
    album: album || "Без альбома",
    artist: artist || "Неизвестный",
    title: title || "Без названия",
  };

  tracksList.addTrack(track);

  // TODO Send new track info to ws clients
});

router.get("/tracks", tracksList.getTracks);

router.get("/tracks/current", tracksList.getLastTrack);

router.post("/tracks/current", async (req) => {
  checkAuthToken(req);

  const { album, artist, title } = await parseBody(req);

  const track: Track = {
    album: album || "Без альбома",
    artist: artist || "Неизвестный",
    title: title || "Без названия",
  };

  tracksList.addTrack(track);

  // TODO Send new track info to ws clients
});
