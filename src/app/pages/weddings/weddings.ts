import { Component, ElementRef, ViewChild, signal, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../components/icon/icon';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-weddings',
  imports: [RouterLink, Icon],
  templateUrl: './weddings.html',
})
export class Weddings implements AfterViewInit, OnDestroy {
  @ViewChild('journeyCarousel') carouselRef!: ElementRef<HTMLElement>;

  protected readonly imageService = inject(ImageService);

  protected readonly activeSlide = signal(0);
  protected readonly totalSlides = 6;
  protected readonly slides = Array.from({ length: this.totalSlides }, (_, i) => i);
  

  private direction = 1;
  private timer: ReturnType<typeof setInterval> | undefined;

  ngAfterViewInit(): void {
    const container = this.carouselRef.nativeElement;
    container.addEventListener('scroll', () => {
      const itemWidth = container.scrollWidth / this.totalSlides;
      const slide = Math.round(container.scrollLeft / itemWidth);
      this.activeSlide.set(Math.min(this.totalSlides - 1, Math.max(0, slide)));
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
    if (next >= this.totalSlides) {
      this.direction = -1;
      this.scrollToSlide(this.totalSlides - 2);
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
    this.scrollToSlide(Math.min(this.totalSlides - 1, this.activeSlide() + 1));
  }

  protected scrollToSlide(index: number): void {
    const container = this.carouselRef.nativeElement;
    const itemWidth = container.scrollWidth / this.totalSlides;
    container.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    this.activeSlide.set(index);
    this.startTimer();
  }
}
