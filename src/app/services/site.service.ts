import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SiteService {
    routes = [
        { label: 'Home', path: 'home' },
        { label: 'About', path: 'about' },
        { label: 'Pricing', path: 'pricing' },
        { label: 'FAQ', path: 'faq-and-testimonials' },
       { label: 'Parties', path: 'parties' },
        { label: 'Weddings', path: 'weddings' },
         { label: 'Contact', path: 'contact' },
    ];
}
