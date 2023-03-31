export interface Track {
  title: string;
  artist: string;
  album: string;
}

export class TracksList {
  #tracks: Track[] = [];

  addTrack(track: Track) {
    if (this.#tracks.length === 10) {
      this.#tracks.shift();
    }

    this.#tracks.push(track);
  }

  getTracks() {
    return this.#tracks;
  }

  getLastTrack() {
    return this.#tracks.at(-1);
  }
}

export const tracksList = new TracksList();
