import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SiteService {
    routes = [
        { label: 'Home', path: 'sweet-cart-goodies-hull' },
        { label: 'About', path: 'about-goodies-sweet-cart-hull' },
        { label: 'Pricing', path: 'sweet-cart-hull-pricing' },
        { label: 'FAQ', path: 'faq-and-testimonials-goodies-sweet-cart-hull' },
        { label: 'Contact', path: 'contact-goodies-sweet-cart-hull' },
    ];
}
