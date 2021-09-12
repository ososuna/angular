import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( term: string ): void {
    
    this.error = false;
    this.term = term;
    
    this.countryService.searchCapital( this.term )
      .subscribe( countries =>  {
        this.countries = countries;
      }, err => {
        this.error = true;
        this.countries = [];
      });

  }

  suggestions( term: string ) {
    this.error = false;
    // TODO: create suggestions
  }

}
