import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { Icon } from '../icon/icon';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './nav-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar {
  protected readonly siteService = inject(SiteService);
  protected readonly imageService = inject(ImageService);
  protected readonly linkBase = 'text-label-md transition-colors duration-300';
  protected readonly linkActive = 'text-amber-700 font-semibold border-b-2 border-amber-600 pb-1';
  protected readonly linkInactive = 'text-stone-600 hover:text-amber-500';
  routes = this.siteService.routes;

  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
