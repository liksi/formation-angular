import { Component } from '@angular/core';
import { Album } from '../../model/album.model';
import { ArtistType } from '../../model/artist-type.enum';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent {

  album: Album = {
    id: 0,
    name: "Pet Sounds",
    note: 10,
    date: "1966",
    artist: {
       id: 0,
       firstname: "The Beach Boys",
       surname: "",
       birthdate: "1961",
       type: ArtistType.BAND,
       nbAlbums: 31
    }
 }
}
