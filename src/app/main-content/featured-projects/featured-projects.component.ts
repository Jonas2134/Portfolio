import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, ProjectListComponent, TranslatePipe],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projects = [
    {
      projectName: 'Join',
      projectSkills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      projectIMG: 'join.png',
      projectDescription: 'projects.joinDescription'
    },
    {
      projectName: 'Sharkie',
      projectSkills: ['HTML', 'CSS', 'JavaScript'],
      projectIMG: 'el-pollo-loco.png',
      projectDescription: 'projects.sharkieDescription'
    }
  ];
}