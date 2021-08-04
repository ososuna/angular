import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor ( private http: HttpClient ) {}

  searchGifs( query: string = '' ) {
    
    query = query.trim().toLocaleLowerCase();

    if ( !this._history.includes( query ) ) {
      this._history.unshift( query );
      this._history = this._history.splice(0, 10);
    }
  
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=NqFFjmEcN1iM7bF1r2n9xb8kTXq3rk94&q=${ query }&limit=10`)
      .subscribe( ( resp: any ) => {
        console.log( resp.data );
        this.results = resp.data;
      });

  }

}
