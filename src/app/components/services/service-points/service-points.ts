import { Component, input } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-service-points',
  imports: [Icon],
  templateUrl: './service-points.html',
})
export class ServicePoints {
  title = input<string>('Please enter title');
  description = input<string>('Please enter description');
}
