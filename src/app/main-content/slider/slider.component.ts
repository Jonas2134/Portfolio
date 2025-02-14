import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slide', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class SliderComponent {
  comments = [
    {
      commentary: 'commentaries.comment1',
      author: 'Lena Falkenberg',
    },
    {
      commentary: 'commentaries.comment2',
      author: 'Samuel Dorn',
    },
    {
      commentary: 'commentaries.comment3',
      author: 'Amira Lehnert',
    },
    {
      commentary: 'commentaries.comment4',
      author: 'Kilian Weiß',
    },
    {
      commentary: 'commentaries.comment5',
      author: 'Talia Schröder',
    },
  ];

  currentIndex: number = 0;
  direction: 'left' | 'right' = 'right';

  get visibleComments() {
    const prevIndex =
      (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    const nextIndex = (this.currentIndex + 1) % this.comments.length;
    return [
      this.comments[prevIndex],
      this.comments[this.currentIndex],
      this.comments[nextIndex],
    ];
  }

  nextComment(): void {
    this.direction = 'right';
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
  }

  prevComment(): void {
    this.direction = 'left';
    this.currentIndex =
      (this.currentIndex - 1 + this.comments.length) % this.comments.length;
  }

  isPointHighlighted(index: number): boolean {
    return this.currentIndex === index;
  }
}
