import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-us/about-us').then(m => m.AboutUs),
  },
  {
    path: 'faq-and-testimonials',
    loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),

  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing),
  },
  {
    path: 'weddings',
    loadComponent: () => import('./pages/weddings/weddings').then(m => m.Weddings)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-us/contact-us').then(m => m.ContactUs)
  },
  {
    path: 'parties',
    loadComponent: () => import('./pages/parties/parties').then(m => m.Parties)
  },
  
  {
    path: '**',
    redirectTo: 'home'
  }
]
