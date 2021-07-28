import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainComponent,
    CharactersComponent,
    AddComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
