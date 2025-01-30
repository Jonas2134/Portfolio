import { Component } from '@angular/core';
import { FullLogoComponent } from '../full-logo/full-logo.component';
import { MinimumLogoComponent } from '../minimum-logo/minimum-logo.component';
import { ScreenSizeService } from '../../service/screen-size.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FullLogoComponent, MinimumLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  screenSize!: 'small' | 'large';

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.screenSizeService.screenSize$.subscribe((size) => {
      this.screenSize = size;
    });
  }
}
