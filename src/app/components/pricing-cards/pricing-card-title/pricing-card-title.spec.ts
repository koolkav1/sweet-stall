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
    fixture.componentRef.setInput('title', 'test-title');
   fixture.componentRef.setInput('description', 'test-description');
   fixture.componentRef.setInput('price', '£1');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
