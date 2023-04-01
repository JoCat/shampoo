export interface Track {
  title: string;
  artist: string;
  album: string;
}

export class TracksList {
  #tracks: Track[] = [];

  addTrack(track: Track) {
    if (this.#tracks.length === 11) {
      this.#tracks.pop();
    }

    this.#tracks.unshift(track);
  }

  getTracks() {
    return this.#tracks.slice(1);
  }

  getLastTrack() {
    return this.#tracks[0] || null;
  }
}

export const tracksList = new TracksList();
