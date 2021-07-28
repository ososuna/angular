import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent  {

  // Input - indicates that characters will come from the parent component (main component)
  // @Input() characters: Character[] = [];

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

}
