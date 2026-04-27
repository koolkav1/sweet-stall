import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.html',
})
export class PricingCard {
featured = input<boolean>(false);
}
