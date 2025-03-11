import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private windowWidth = signal(window.innerWidth);
  public screenSize = computed(() => {
    const width = this.windowWidth();
    if (width < 1000) {
      return 'medium';
    } else {
      return 'large';
    }
  });

  public visibleIcon = computed(() => {
    const width = this.windowWidth();
    if (width < 1100) {
      return 'smallIcon';
    }
    return null
  });

  constructor() {
    effect((onCleanup) => {
      const listener = () => this.windowWidth.set(window.innerWidth);
      window.addEventListener('resize', listener);
      onCleanup(() => window.removeEventListener('resize', listener));
    });
  }
}
