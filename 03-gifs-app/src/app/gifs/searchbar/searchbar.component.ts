import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [
  ]
})
export class SearchbarComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    const value = this.txtSearch.nativeElement.value;
    console.log( value );
    this.txtSearch.nativeElement.value = '';
  }

}
