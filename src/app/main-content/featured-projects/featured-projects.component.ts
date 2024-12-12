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
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
    {
      projectName: 'El Pollo Loco',
      projectSkills: ['HTML', 'CSS', 'JavaScript'],
      projectIMG: 'el-pollo-loco.png',
      projectDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
  ];


}