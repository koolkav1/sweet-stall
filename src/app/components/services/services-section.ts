import { Component, contentChild } from '@angular/core';
import { ImageCover } from '../../directives/image-cover/image-cover';

@Component({
  selector: 'app-services-section',
  imports: [ ImageCover],
  templateUrl: './services-section.html',
})
export class ServicesSection {
readonly hasImage = contentChild('service-image');
}
