import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me-img.component.scss']
})
export class AboutMeComponent {

}
