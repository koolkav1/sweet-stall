import { Component, input } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-pricing-bullets',
  imports: [Icon],
  templateUrl: './pricing-bullets.html',
})
export class PricingBullets {
featured = input<boolean | undefined>(undefined);
greyed = input<boolean | undefined>(undefined);
}
