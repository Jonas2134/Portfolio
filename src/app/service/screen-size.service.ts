import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private screenSizeSubject = new BehaviorSubject<'small' | 'large'>(
    this.getScreenSize()
  );
  screenSize$ = this.screenSizeSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(throttleTime(500))
        .subscribe(() => {
          this.ngZone.run(() => {
            this.screenSizeSubject.next(this.getScreenSize());
          });
        });
    });
  }

  private getScreenSize(): 'small' | 'large' {
    return window.innerWidth <= 1000 ? 'small' : 'large';
  }
}
