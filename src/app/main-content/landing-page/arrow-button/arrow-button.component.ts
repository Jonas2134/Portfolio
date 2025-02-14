import { Component } from '@angular/core';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-arrow-button',
  standalone: true,
  imports: [],
  templateUrl: './arrow-button.component.html',
  styleUrl: './arrow-button.component.scss',
  animations: [
    trigger('arrowBounce', [
      transition('* => *', [
        animate(
          '1500ms linear',
          keyframes([
            style({ transform: 'translateY(0)', offset: 0 }),
            style({ transform: 'translateY(-5px)', offset: 0.25 }),
            style({ transform: 'translateY(0)', offset: 0.5 }),
            style({ transform: 'translateY(5px)', offset: 0.75 }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ArrowButtonComponent {
  state = 0;

  toggleState() {
    this.state++;
  }
}
