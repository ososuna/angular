import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  };
  
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(): void {
    if ( this.newCharacter.name.trim().length === 0 ) return;
    
    this.onNewCharacter.emit( this.newCharacter );

    this.newCharacter = {
      name: '',
      power: 0
    };

  }

}
