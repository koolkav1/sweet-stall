import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../components/icon/icon';
import { ImageService } from '../../services/image.service';
import { Carousel } from '../../components/carousel/carousel';
import { CarouselSlide } from '../../components/carousel/carousel-slide/carousel-slide';
import { ServicesSection } from '../../components/services/services-section';
import { ServicePoints } from '../../components/services/service-points/service-points';
import { AccentTitle } from '../../directives/accent-title/accent-title';

@Component({
  selector: 'app-weddings',
  imports: [RouterLink, Icon, Carousel, CarouselSlide, ServicesSection, ServicePoints, AccentTitle],
  templateUrl: './weddings.html',
})
export class Weddings {
  imageService = inject(ImageService);
 
}
