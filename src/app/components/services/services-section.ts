import { Component, contentChild } from '@angular/core';
import { Icon } from '../icon/icon';
import { ServicePoints } from './service-points/service-points';
import { ImageCover } from '../../directives/image-cover/image-cover';
import { AccentTitle } from '../../directives/accent-title/accent-title';

@Component({
  selector: 'app-services-section',
  imports: [Icon, ServicePoints, ImageCover, AccentTitle],
  templateUrl: './services-section.html',
})
export class ServicesSection {
readonly hasImage = contentChild('service-image');
}
