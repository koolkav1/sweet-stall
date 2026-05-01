import { Directive } from '@angular/core';

@Directive({
  selector: '[appAccentTitle]',
  standalone: true,
  host: {
    'class': 'text-display-lg font-display-lg text-primary mb-md'
  }
})
export class AccentTitle {
}
