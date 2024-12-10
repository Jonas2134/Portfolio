import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, ProjectListComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projects = [
    {
      projectName: 'Join',
      projectSkills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      projectIMG: 'join.png',
    },
    {
      projectName: 'El Pollo Loco',
      projectSkills: ['HTML', 'CSS', 'JavaScript'],
      projectIMG: 'el-pollo-loco.png',
    },
  ];


}