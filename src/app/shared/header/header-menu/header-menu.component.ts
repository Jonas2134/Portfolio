import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { RouterStateService } from '../../../service/router-state.service';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss', './header-menu-checkbox.component.scss'],
})
export class HeaderMenuComponent implements OnInit{
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  
  RouterStateService = inject(RouterStateService);

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
