import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'NqFFjmEcN1iM7bF1r2n9xb8kTXq3rk94';
  private _history: string[] = [];
  public results: any[] = [];

  get history(): string[] {
    return [...this._history];
  }

  constructor ( private http: HttpClient ) {
    this._history = JSON.parse( localStorage.getItem('history')! ) || [];
    this.results = JSON.parse( localStorage.getItem('results')! ) || [];
  }

  searchGifs( query: string = '' ) {
    
    query = query.trim().toLocaleLowerCase();

    if ( !this._history.includes( query ) ) {
      this._history.unshift( query );
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify( this._history ));

    }
  
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${ this.apiKey }&q=${ query }&limit=10`)
        .subscribe( ( resp ) => {
          this.results = resp.data;
          localStorage.setItem('results', JSON.stringify( this.results ));
        });

  }

}
