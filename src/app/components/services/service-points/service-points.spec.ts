import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicePoints } from './service-points';

describe('ServicePoints', () => {
  let component: ServicePoints;
  let fixture: ComponentFixture<ServicePoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePoints],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePoints);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
