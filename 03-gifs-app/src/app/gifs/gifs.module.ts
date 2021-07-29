import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchbarComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
