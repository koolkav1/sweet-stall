import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weddings } from './weddings';

describe('Weddings', () => {
  let component: Weddings;
  let fixture: ComponentFixture<Weddings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weddings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weddings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
