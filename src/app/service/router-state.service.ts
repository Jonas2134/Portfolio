import { computed, inject, Injectable, signal } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterStateService {
  private router = inject(Router);

  private currentActive = signal<'Main' | 'Imprint' | 'Privacy' | null>(null);

  activeComponent = computed(() => this.currentActive());

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const activeRoute = this.getDeepestChild(
          this.router.routerState.snapshot.root
        );
        const active = activeRoute.routeConfig?.data?.['active'] ?? null;
        this.currentActive.set(active);
      }
    );
  }

  private getDeepestChild(
    route: ActivatedRouteSnapshot
  ): ActivatedRouteSnapshot {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
