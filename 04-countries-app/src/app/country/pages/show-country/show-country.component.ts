import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country!: Country;

  constructor(
              private activatedRoute: ActivatedRoute,
              private countryService: CountryService
            ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        // Receives and observable and returns another
        switchMap( ({ id }) => this.countryService.getCountryByAlpha( id ) ),
        // Secondary effect
        tap( console.log )
      )
      .subscribe( country => this.country = country );

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
        
    //     this.countryService.getCountryByAlpha( id )
    //       .subscribe( country => {
    //         console.log( country );
    //       });

    //   });
  }

}
