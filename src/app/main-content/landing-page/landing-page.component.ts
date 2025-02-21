import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScreenSizeService } from '../../service/screen-size.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { InfoStripComponent } from './info-strip/info-strip.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ButtonComponent, ArrowButtonComponent, InfoStripComponent, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private ScreenSizeService = inject(ScreenSizeService);

  screenSize = this.ScreenSizeService.screenSize;

  constructor() {}
}
