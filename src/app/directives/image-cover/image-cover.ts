import { Directive } from '@angular/core';

@Directive({
  selector: '[appImageCover]',
  standalone: true,
  host: {
    'class': 'w-full h-full object-cover'
  }
})
export class ImageCover {
}
