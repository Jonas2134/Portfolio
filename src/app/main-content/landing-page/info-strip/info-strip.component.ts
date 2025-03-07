import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-strip',
  standalone: true,
  imports: [CommonModule ,TranslatePipe],
  templateUrl: './info-strip.component.html',
  styleUrl: './info-strip.component.scss',
  animations: [
    trigger('scrollLeft', [
      transition('* => *', [
        style({ transform: 'translateX(25%)' }),
        animate('10s linear', style({ transform: 'translateX(-25%)' })),
      ]),
    ]),
  ],
})
export class InfoStripComponent {
  state = 0;
  infos: string[] = ['landingPage.info1', 'landingPage.info2', 'landingPage.info3', 'landingPage.info4'];

  toggleState() {
    this.state++;
  }
}
