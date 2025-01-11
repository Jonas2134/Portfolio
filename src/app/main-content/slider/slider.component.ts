import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
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
  isAnimatingLeft = false;
  isAnimatingRight = false;

  get visibleComments() {
    const prevIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    const nextIndex = (this.currentIndex + 1) % this.comments.length;
    return [
      this.comments[prevIndex],
      this.comments[this.currentIndex],
      this.comments[nextIndex],
    ];
  }

  nextComment(): void {
    this.isAnimatingLeft = true;
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
    setTimeout(() => {
      this.isAnimatingLeft = false;
    }, 500);
  }

  prevComment(): void {
    this.isAnimatingRight = true;
    this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    setTimeout(() => {
      this.isAnimatingRight = false;
    }, 500);
  }

  isHighlighted(index: number): boolean {
    return this.currentIndex === index;
  }

  isPointHighlighted(index: number): boolean {
    return this.currentIndex === index;
  }
}
