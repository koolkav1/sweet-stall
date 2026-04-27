import { Component, input } from '@angular/core';
import { PricingCardTitle } from '../pricing-card-title/pricing-card-title';

@Component({
  selector: 'app-pricing-card',
  imports: [],
  templateUrl: './pricing-card.html',
})
export class PricingCard {
featured = input<boolean>(false);
}
