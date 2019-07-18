import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div [class.green]="this.green">
        <span [class.big]="this.big">
          <h1>Minimalist</h1>
        </span>
      </div>
      <button (click)="toggleThisGreen()">
        {{ this.green == 1 ? 'Make text black' : 'Make text green' }}
      </button>
      <button (click)="toggleThisBig()">
        {{ this.big == 1 ? 'Make text small' : 'Make text big' }}
      </button>
    </div>

  `,
  styles: [`
    .green { color: green }
    .big { font-size: 100px }
  `]
})
export class AppComponent  {
  public green:boolean = false;
  public big:boolean = false;

  toggleThisGreen() {
    this.green = !this.green;
    console.log(this.green);
  }

  toggleThisBig() {
    this.big = !this.big;
  }
}
