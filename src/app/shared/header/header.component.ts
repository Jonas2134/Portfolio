import { Component, HostListener } from '@angular/core';
import { FullLogoComponent } from './full-logo/full-logo.component';
import { MinimumLogoComponent } from './minimum-logo/minimum-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CommonModule } from '@angular/common';
import { NgClickOutsideDirective } from 'ng-click-outside2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FullLogoComponent,
    MinimumLogoComponent,
    HeaderMenuComponent,
    NgClickOutsideDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  screenSize: 'small' | 'large' = this.getScreenSize();
  isVisible: boolean = false;

  @HostListener('window:resize', [])
  onResize() {
    this.screenSize = this.getScreenSize();
  }

  private getScreenSize(): 'small' | 'large' {
    return window.innerWidth <= 1000 ? 'small' : 'large';
  }

  toggleMenu() {
    this.isVisible = !this.isVisible;
  }

  onClickedOutside(event: Event) {
    if (this.isVisible) this.isVisible = false;
  }
}
