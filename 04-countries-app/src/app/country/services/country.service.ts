import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }
  
  searchCountry( term: string ): Observable<any> {
  
    const url = `${ this.apiUrl }/name/${ term }`; 
    return this.http.get( url );
  }

}