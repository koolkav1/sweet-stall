import { Component, input } from '@angular/core';
import { Icon } from '../../components/icon/icon';
import { PricingCard } from '../../components/pricing-cards/pricing-card/pricing-card';
import { PricingCardTitle } from '../../components/pricing-cards/pricing-card-title/pricing-card-title';
import { PricingBullets } from '../../components/pricing-cards/pricing-bullets/pricing-bullets';

@Component({
  selector: 'app-pricing',
  imports: [Icon, PricingCard, PricingCardTitle, PricingBullets],
  templateUrl: './pricing.html',
})
export class Pricing {

}
