import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCreateComponent } from './component/album-create/album-create.component';
import { AlbumDetailComponent } from './component/album-detail/album-detail.component';
import { AlbumListComponent } from './component/album-list/album-list.component';
import { ArtistCreateComponent } from './component/artist-create/artist-create.component';
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'album/list',
        component: AlbumListComponent
      },
      {
        path: 'album/create',
        component: AlbumCreateComponent
      },
      {
        path: 'album/:id',
        component: AlbumDetailComponent
      },
      {
        path: 'artist/create',
        component: ArtistCreateComponent
      },
      {
        path: 'artist/:id',
        component: ArtistDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
