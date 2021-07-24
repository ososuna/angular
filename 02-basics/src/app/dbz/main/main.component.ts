import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

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

  add(): void {
    if ( this.newCharacter.name.trim().length === 0 ) return;
  
    this.characters.push( this.newCharacter );

    this.newCharacter = {
      name: '',
      power: 0
    };

  }

}
