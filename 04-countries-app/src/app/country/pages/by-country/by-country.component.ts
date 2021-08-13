import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  term: string = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    console.log( this.term );
  }

}
