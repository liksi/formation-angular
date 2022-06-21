import { Component } from '@angular/core';
import { ArtistType } from '../../model/artist-type.enum';
import { Artist } from '../../model/artist.model';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.scss']
})
export class ArtistCreateComponent {

  artistTypes: ArtistType[] = Object.values(ArtistType)

  artist: Artist = {
    id: 5,
    firstname: "",
    surname: "",
    type: ArtistType.SOLO,
    birthdate: "",
    nbAlbums: 0
  }

  addArtist() {
    console.log(this.artist);
  }
}
