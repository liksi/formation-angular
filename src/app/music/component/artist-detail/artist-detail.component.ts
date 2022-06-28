import { Component, Input } from '@angular/core';
import { ArtistType } from '../../model/artist-type.enum';
import { Artist } from '../../model/artist.model';
import { ArtistService } from '../../service/artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent {

  @Input() displayNbAlbums: boolean = true;

  @Input() artist: Artist = {
    id: 0,
    firstname: "David",
    surname: "Bowie",
    type: ArtistType.SOLO,
    birthdate: '08/01/1947',
    nbAlbums: 28
  }

  constructor(private artistService: ArtistService) {
  }

  changeName() {
    this.artist = {
      ...this.artist,
      firstname: "Jack"
    }
  }
}
