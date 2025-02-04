import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  isHidden = false;
  private lastScrollTop = 0;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) this.isHidden = true;
    else this.isHidden = false;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
