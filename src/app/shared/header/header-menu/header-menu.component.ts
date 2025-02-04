import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Input() isVisible: boolean = false;

  @Output() close = new EventEmitter<void>();

  constructor(private translate: TranslateService) {}

  closeMenu() {
    this.close.emit();
  }

  changeLanguage(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newLanguage = isChecked ? 'de' : 'en';
    this.translate.use(newLanguage);
  }
}
