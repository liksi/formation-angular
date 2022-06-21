import { Component, Input, OnInit } from '@angular/core';
import { ArtistType } from '../../model/artist-type.enum';
import { Artist } from '../../model/artist.model';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent {

  @Input() artist: Artist = {
    id: 0,
    firstname: "David",
    surname: "Bowie",
    type: ArtistType.SOLO,
    birthdate: '08/01/1947'
  }
}
