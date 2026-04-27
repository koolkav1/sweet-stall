import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardTitle } from './pricing-card-title';

describe('PricingCardTitle', () => {
  let component: PricingCardTitle;
  let fixture: ComponentFixture<PricingCardTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCardTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCardTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
