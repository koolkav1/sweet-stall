import { AfterViewInit, Component, ElementRef, inject, input, OnDestroy, signal, viewChild } from '@angular/core';
import { CarouselSlide } from './carousel-slide/carousel-slide';
import { ImageService } from '../../services/image.service';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-carousel',
  imports: [ Icon],
  templateUrl: './carousel.html',
  host: { class: 'block' }
})
export class Carousel implements AfterViewInit, OnDestroy {


carouselRef = viewChild.required<ElementRef<HTMLElement>>('journeyCarousel');

  protected readonly imageService = inject(ImageService);

  protected readonly activeSlide = signal(0);
   totalSlides = input<number>(5);
  protected readonly slides = Array.from({ length: this.totalSlides() }, (_, i) => i);
  

  private direction = 1;
  private timer: ReturnType<typeof setInterval> | undefined;

  ngAfterViewInit(): void {
    const container = this.carouselRef().nativeElement;
    container.addEventListener('scroll', () => {
      const itemWidth = container.scrollWidth / this.totalSlides();
      const slide = Math.round(container.scrollLeft / itemWidth);
      this.activeSlide.set(Math.min(this.totalSlides() - 1, Math.max(0, slide)));
    }, { passive: true });

    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private startTimer(): void {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.advance(), 30_000);
  }

  private advance(): void {
    const next = this.activeSlide() + this.direction;
    if (next >= this.totalSlides()) {
      this.direction = -1;
      this.scrollToSlide(this.totalSlides() - 2);
    } else if (next < 0) {
      this.direction = 1;
      this.scrollToSlide(1);
    } else {
      this.scrollToSlide(next);
    }
  }

  protected prev(): void {
    this.scrollToSlide(Math.max(0, this.activeSlide() - 1));
  }

  protected next(): void {
    this.scrollToSlide(Math.min(this.totalSlides() - 1, this.activeSlide() + 1));
  }

  protected scrollToSlide(index: number): void {
    const container = this.carouselRef().nativeElement;
    const itemWidth = container.scrollWidth / this.totalSlides();
    container.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    this.activeSlide.set(index);
    this.startTimer();
  }
}
