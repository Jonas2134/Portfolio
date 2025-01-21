import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  constructor(private translate: TranslateService) {}

  changeLanguage(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newLanguage = isChecked ? 'de' : 'en';
    this.translate.use(newLanguage);
  }
}
