import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pricing-card-title',
  imports: [],
  templateUrl: './pricing-card-title.html',
})
export class PricingCardTitle {
featured = input<boolean| undefined>(undefined);
title = input.required<string>();
price = input.required<string>();
description = input.required<string>();
}
