import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent  {

  term: string = 'Hello World';
  error: boolean = false;

  constructor( private countryService: CountryService ) { }

  search(): void {
    this.error = false;
    console.log( this.term );
    
    this.countryService.searchCountry( this.term )
      .subscribe( resp =>  {
        console.log( resp );
      }, err => {
        this.error = true;
      });

  }

}
