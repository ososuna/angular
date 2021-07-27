import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() characters: Character[] = [];
  
  @Input() newCharacter: Character = {
    name: '',
    power: 0
  };

  add(): void {
    if ( this.newCharacter.name.trim().length === 0 ) return;
  
    this.characters.push( this.newCharacter );

    this.newCharacter = {
      name: '',
      power: 0
    };

  }

}
