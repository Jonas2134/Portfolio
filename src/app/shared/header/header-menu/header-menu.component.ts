import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent implements OnInit{
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  isEnglish!: boolean;

  constructor(public translate: TranslateService) {}

  ngOnInit() {
    this.isEnglish = this.translate.currentLang === 'en';

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.isEnglish = event.lang === 'en';
    });
  }

  closeMenu() {
    this.close.emit();
  }

  changeLanguage(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newLang = target.checked ? 'en' : 'de';

    this.translate.use(newLang);
    this.isEnglish = newLang === 'en';
  }
}
