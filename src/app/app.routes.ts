import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'sweet-cart-goodies-hull',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about-goodies-sweet-cart-hull',
    loadComponent: () => import('./pages/about-us/about-us').then(m => m.AboutUs),
  },
  {
    path: 'faq-and-testimonials-goodies-sweet-cart-hull',
    loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),

  },
  {
    path: 'sweet-cart-hull-pricing',
    loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing),
  },
  {
    path: 'contact-goodies-sweet-cart-hull',
    loadComponent: () => import('./pages/contact-us/contact-us').then(m => m.ContactUs)
  },
  {
    path: '**',
    redirectTo: 'sweet-cart-goodies-hull'
  }
]
