import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselSlide } from './carousel-slide';

describe('CarouselSlide', () => {
  let component: CarouselSlide;
  let fixture: ComponentFixture<CarouselSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSlide],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselSlide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
