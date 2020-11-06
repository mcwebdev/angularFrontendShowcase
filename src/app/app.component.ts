import { Component, HostBinding } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'Angular Frontend Showcase';
  loading = false;
  items: MenuItem[];

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Widgets',
        routerLink: 'widgets',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Keyframe Animations',
        routerLink: 'pokerSlots',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Host animations',
        routerLink: 'deckOfCards',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Charts',
        routerLink: 'charts',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Directives',
        routerLink: 'directives',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Pipes',
        routerLink: 'pipes',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'GraphQL',
        routerLink: 'graph',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Web Workers',
        routerLink: 'webworkers',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'Http',
        routerLink: 'http',
        routerLinkActiveOptions: 'router-link-active'
      },
      {
        label: 'UX',
        routerLink: 'ux',
        routerLinkActiveOptions: 'router-link-active'
      },
      //{
      //  label: 'Media Detection',
      //  routerLink: 'media',
      //  routerLinkActiveOptions: 'router-link-active'
      //},
      {
        label: 'Machine Learning',
        routerLink: 'machine',
        routerLinkActiveOptions: 'router-link-active'
      },
    ]
      
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }

}
