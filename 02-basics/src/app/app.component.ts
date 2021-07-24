import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title : string = 'Counter App';
  number: number = 10;
  base  : number = 5;

  acumulate( value: number ): void {
    this.number += value;
  }

}
