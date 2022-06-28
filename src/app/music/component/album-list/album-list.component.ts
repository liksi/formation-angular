import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../../model/album.model';
import { ArtistType } from '../../model/artist-type.enum';
import { AlbumService } from '../../service/album.service';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {

  albums: Album[] = [
    {
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
    },
    {
      id :1,
      name :"Let's Dance",
      note :10,
      date :"1986",
      artist: {
        id: 0,
        firstname: "David",
        surname: "Bowie",
        type: ArtistType.SOLO,
        birthdate: '08/01/1947',
        nbAlbums: 28
      }
    }
 ];

  constructor(private router: Router, private albumService: AlbumService) {
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/music/album', id])
  }
}
