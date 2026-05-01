import { Component, input } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  imports: [],
  templateUrl: './carousel-slide.html',
  host: {
    class: 'block snap-center shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
  }
})
export class CarouselSlide {
  slideNumber = input<number>(1);
  slideTitle = input<string>('Please add Title');
  slideDescription = input<string>('Please add Description');
}
