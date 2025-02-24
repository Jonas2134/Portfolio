import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private observer!: IntersectionObserver;
  private elements: { [id: string]: HTMLElement } = {};

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const urlTree = this.router.parseUrl(event.url);
        const fragment = urlTree.fragment;
        if (fragment) {
          this.scrollToSection(fragment);
          this.handleSectionVisibility(fragment);
        }
      }
    );
  }

  public setupIntersectionObserver(elements: { [id: string]: HTMLElement }): void {
    this.elements = elements;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.handleSectionVisibility(entry.target.id);
          }
        });
      },
      { threshold: 0.75 }
    );
    Object.values(elements).forEach((el) => {
      if (el) {
        this.observer.observe(el);
      }
    });
  }

  private handleSectionVisibility(sectionId: string): void {
    const newUrl = sectionId === 'home' ? '/' : `/${sectionId}`;
    history.replaceState(null, '', newUrl);
  }

  public scrollToSection(sectionId: string): void {
    const element = this.elements[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
