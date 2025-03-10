import { Component, inject } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { FullLogoComponent } from '../full-logo/full-logo.component';
import { MinimumLogoComponent } from '../minimum-logo/minimum-logo.component';
import { ScreenSizeService } from '../../service/screen-size.service';

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
  private ScreenSizeService = inject(ScreenSizeService);
  
  isVisible: boolean = false;
  screenSize = this.ScreenSizeService.screenSize;

  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu() {
    this.isVisible = !this.isVisible;
  }

  closeMenu() {
    this.isVisible = false;
  }

  onClickedOutside(event: Event) {
    if (this.isVisible) this.isVisible = false;
  }

  scrollToComponent(): void {
    this.viewportScroller.scrollToAnchor('footer');
  }
}
