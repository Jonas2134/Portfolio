import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  @Input() projectName:string = '';
  @Input() projectSkills!:any[];
  @Input() projectIMG:string = '';
  @Input() isFirstProject:boolean = false;
}
