import { People } from "./people.interfaces";

export interface Film {
    title: string;
    episode_id: string;
    director: string;
    characters : People[];
    url: string;
  }