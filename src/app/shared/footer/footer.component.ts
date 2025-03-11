import { Component, inject } from '@angular/core';
import { FullLogoComponent } from '../full-logo/full-logo.component';
import { MinimumLogoComponent } from '../minimum-logo/minimum-logo.component';
import { ScreenSizeService } from '../../service/screen-size.service';
import { RouterLink } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterStateService } from '../../service/router-state.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FullLogoComponent, MinimumLogoComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private ScreenSizeService = inject(ScreenSizeService);
  RouterStateService = inject(RouterStateService);

  screenSize = this.ScreenSizeService.screenSize;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
