import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../components/carousel/carousel';
import { CarouselSlide } from '../../components/carousel/carousel-slide/carousel-slide';
import { Icon } from '../../components/icon/icon';
import { ServicePoints } from '../../components/services/service-points/service-points';
import { ServicesSection } from '../../components/services/services-section';
import { AccentTitle } from '../../directives/accent-title/accent-title';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-parties',
    imports: [RouterLink, Icon, Carousel, CarouselSlide, ServicesSection, ServicePoints, AccentTitle],
  templateUrl: './parties.html',

})
export class Parties {
imageService = inject(ImageService);
}
