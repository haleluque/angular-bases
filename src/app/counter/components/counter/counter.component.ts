import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseDecreaseBy()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseDecreaseBy(true)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseDecreaseBy = (decrease: boolean = false): void => {
    if (decrease) {
      this.counter -= 1;
    }
    else { this.counter += 1; }
  }

  reset = () => { this.counter = 10; }
}
