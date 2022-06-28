import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Album } from '../../model/album.model';
import { ArtistType } from '../../model/artist-type.enum';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.scss']
})
export class AlbumCreateComponent {

  albumForm: FormGroup;

  artistTypes: ArtistType[] = Object.values(ArtistType)

  constructor(formBuilder: FormBuilder) {
    this.albumForm = formBuilder.group({
      id: [0, [Validators.required]],
      name: ['', [Validators.minLength(2)]],
      description: [''],
      note: [3, [Validators.required]],
      date: ['', [Validators.required]],
      artist: formBuilder.group({
        id: [0, [Validators.required]],
        firstname: ['', [Validators.required]],
        surname: [''],
        birthdate: ['', [Validators.required]],
        type: ['', [Validators.required]],
        nbAlbums: [0, [Validators.required]]
      })
    })
  }

  addAlbum() {
    const myAlbum: Album = {
      ...this.albumForm.value,
    }

    console.log("Ajout d'un album", myAlbum);
  }
}
