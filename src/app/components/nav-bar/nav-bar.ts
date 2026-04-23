import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar {
  protected readonly siteService = inject(SiteService);
  protected readonly linkBase = 'text-label-md transition-colors duration-300';
  protected readonly linkActive = 'text-amber-700 font-semibold border-b-2 border-amber-600 pb-1';
  protected readonly linkInactive = 'text-stone-600 hover:text-amber-500';
  routes = this.siteService.routes;

}
