import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingBullets } from './pricing-bullets';

describe('PricingBullets', () => {
  let component: PricingBullets;
  let fixture: ComponentFixture<PricingBullets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingBullets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingBullets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
