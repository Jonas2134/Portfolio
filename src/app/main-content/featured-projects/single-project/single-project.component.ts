import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() projects!: any[];
  @Input() index!: number;

  @Output() close = new EventEmitter<void>();

  closeCard() {
    this.close.emit();
  }

  nextProject() {
    this.index = (this.index + 1) % this.projects.length;
  }
}
