import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-info-strip',
  standalone: true,
  imports: [],
  templateUrl: './info-strip.component.html',
  styleUrl: './info-strip.component.scss',
  animations: [
    trigger('scrollLeft', [
      transition('* => *', [
        style({ transform: 'translateX(130%)' }),
        animate('10s linear', style({ transform: 'translateX(-130%)' })),
      ]),
    ]),
  ],
})
export class InfoStripComponent {
  state = 0;

  toggleState() {
    this.state++;
  }
}
