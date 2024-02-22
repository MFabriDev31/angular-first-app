import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, DisplayComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    if (this.count === 0) return;
    this.count = this.count - 1;
  }

  reset() {
    this.count = 0;
  }
}
