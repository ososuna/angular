import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  
  constructor( ) { }

  newCharacter: Character = {
    name: '',
    power: 0
  }

}
