import { Component, Input } from '@angular/core';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  animations: [
    trigger('slideLoop', [
      transition('* => active', [
        animate(
          '2s ease',
          keyframes([
            style({ transform: 'translateX(0)', offset: 0 }),
            style({ transform: 'translateX(-130%)', offset: 0.5 }),
            style({ transform: 'translateX(130%)', offset: 0.51 }),
            style({ transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ButtonComponent {
  @Input() translationKey!: string;

  isHovered = false;
  animationState = 'inactive';

  startAnimation() {
    this.isHovered = true;
    this.animationState = 'active';
  }

  resetAnimation() {
    this.isHovered = false;
    this.animationState = 'inactive';
  }

  onAnimationDone() {
    if (this.isHovered) {
      this.animationState = 'inactive';
      setTimeout(() => this.animationState = 'active', 10);
    }
  }
}
