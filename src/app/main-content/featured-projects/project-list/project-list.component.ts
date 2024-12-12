import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from '../single-project/single-project.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  @Input() projects!: any[];
  @Input() index!: number;
  @Input() isFirstProject: boolean = false;

  isCardOpen = false;

  openCard() {
    this.isCardOpen = true;
  }

  closeCard() {
    this.isCardOpen = false;
  }
}
