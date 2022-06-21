import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from '../model/artist.model';

@Pipe({
  name: 'individu'
})
export class IndividuPipe implements PipeTransform {

  transform(artist: Artist): string {
    return `${artist.firstname} ${artist.surname}`;
  }

}
