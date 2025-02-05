import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScreenSizeService } from '../../service/screen-size.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private ScreenSizeService = inject(ScreenSizeService);

  screenSize = this.ScreenSizeService.screenSize;
}
