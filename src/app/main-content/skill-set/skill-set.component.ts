import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  skills = [
    { img: "html.svg", name: "HTML" },
    { img: "css.svg", name: "CSS" },
    { img: "javascript.svg", name: "JavaScript" },
    { img: "material.svg", name: "Material Design" },
    { img: "typescript.svg", name: "TypeScript" },
    { img: "angular.svg", name: "Angular" },
    { img: "firebase.svg", name: "Firebase" },
    { img: "git.svg", name: "GIT" },
    { img: "api.svg", name: "Rest-Api" },
    { img: "scrum.svg", name: "Scrum" },
  ];
}