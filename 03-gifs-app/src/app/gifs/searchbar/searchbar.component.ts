import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [
  ]
})
export class SearchbarComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  search(): void {
    const value = this.txtSearch.nativeElement.value;
    this.gifsService.searchGifs( value );
    this.txtSearch.nativeElement.value = '';
  }

}
