import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailComponent } from './component/album-detail/album-detail.component';
import { ArtistDetailComponent } from './component/artist-detail/artist-detail.component';
import { MusicRoutingModule } from './music-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AlbumListComponent } from './component/album-list/album-list.component';
import { HighlightDirective } from './directive/highlight.directive';
import { IndividuPipe } from './pipe/individu.pipe';
import { ArtistCreateComponent } from './component/artist-create/artist-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumCreateComponent } from './component/album-create/album-create.component';



@NgModule({
  declarations: [
    AlbumDetailComponent,
    ArtistDetailComponent,
    HeaderComponent,
    HomeComponent,
    AlbumListComponent,
    HighlightDirective,
    IndividuPipe,
    ArtistCreateComponent,
    AlbumCreateComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MusicModule {
}
