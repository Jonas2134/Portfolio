import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  comments = [
    {
      commentary: 'Das ist ein toller Kommentar!',
      author: 'Lena Falkenberg',
    },
    {
      commentary: 'Dieser Kommentar ist noch besser!',
      author: 'Samuel Dorn',
    },
    {
      commentary: 'Wow, das ist der beste Kommentar!',
      author: 'Amira Lehnert',
    },
    {
      commentary: 'Angular macht echt Spaß!',
      author: 'Kilian Weiß',
    },
    {
      commentary: 'Kommentare machen alles lebendiger!',
      author: 'Talia Schröder',
    },
  ];
  currentIndex: number = 0;

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
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
  }

  prevComment(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.comments.length) % this.comments.length;
  }

  isHighlighted(index: number): boolean {
    return this.currentIndex === index;
  }
}
