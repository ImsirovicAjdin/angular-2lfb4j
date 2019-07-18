import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div [class.green]="this.green">
        <h1>Minimalist</h1>
      </div>
      <button (click)="toggleThisGreen()">
        {{ this.green == 1 ? 'Make text black' : 'Make text green' }}
      </button>
    </div>

  `,
  styles: [`
    .green { color: green }
  `]
})
export class AppComponent  {
  public green:boolean = false;
  public big:boolean = false;

  toggleThisGreen() {
    this.green = !this.green;
    console.log(this.green);
  }
}
