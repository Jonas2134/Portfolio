import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AboutMeComponent,
    SkillSetComponent,
    FeaturedProjectsComponent,
    ContactMeComponent,
    SliderComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements AfterViewInit {
  @ViewChild('home', { read: ElementRef }) home!: ElementRef<HTMLElement>;
  @ViewChild('aboutMe', { read: ElementRef }) aboutMe!: ElementRef<HTMLElement>;
  @ViewChild('skills', { read: ElementRef }) skills!: ElementRef<HTMLElement>;
  @ViewChild('projects', { read: ElementRef }) projects!: ElementRef<HTMLElement>;
  @ViewChild('comments', { read: ElementRef }) comments!: ElementRef<HTMLElement>;
  @ViewChild('contactMe', { read: ElementRef }) contactMe!: ElementRef<HTMLElement>;

  constructor(private navigation: NavigationService) {}

  ngAfterViewInit(): void {
    const elements = {
      home: this.home.nativeElement,
      'about-me': this.aboutMe.nativeElement,
      skills: this.skills.nativeElement,
      projects: this.projects.nativeElement,
      comments: this.comments.nativeElement,
      'contact-me': this.contactMe.nativeElement,
    };

    this.navigation.setupIntersectionObserver(elements);
  }
}
