import { Component, HostListener } from '@angular/core';
import { FullLogoComponent } from './full-logo/full-logo.component';
import { MinimumLogoComponent } from './minimum-logo/minimum-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FullLogoComponent,
    MinimumLogoComponent,
    HeaderMenuComponent,
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
    return window.innerWidth < 1000 ? 'small' : 'large';
  }

  openMenu() {
    this.isVisible = true;
    console.log('open');    
  }

  closeMenu() {
    if (this.isVisible === true) {
      this.isVisible = false;
      console.log('close in if');
    }
    console.log('close out if');
  }
}
