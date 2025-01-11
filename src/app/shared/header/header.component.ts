import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}

  changeLanguage(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newLanguage = isChecked ? 'de' : 'en';
    this.translate.use(newLanguage);
  }
}
