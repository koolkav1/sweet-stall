import { Component, input } from '@angular/core';


@Component({
  selector: 'app-service-points',
  imports: [],
  templateUrl: './service-points.html',
})
export class ServicePoints {
  title = input<string>('Please enter title');
  description = input<string>('Please enter description');
}
