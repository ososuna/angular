import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    MainComponent,
    CharactersComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
