import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 8500
    }
  ];

  newCharacter: Character = {
    name: '',
    power: 0
  }

  addNewCharacter( character: Character ) {
    this.characters.push( character );
  }

}
