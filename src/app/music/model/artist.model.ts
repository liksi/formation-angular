import { ArtistType } from "./artist-type.enum";

export interface Artist {
  id: number;
  firstname: string;
  surname: string;
  birthdate: string;
  type: ArtistType;
  nbAlbums: number;
}
