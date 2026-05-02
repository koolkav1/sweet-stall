import { Component, inject } from '@angular/core';
import { Icon } from '../../components/icon/icon';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  imports: [Icon],
  templateUrl: './about-us.html',
})
export class AboutUs {
   readonly title = inject(Title).setTitle('About Gumball & Goodies');
  readonly description = inject(Meta).updateTag({name: 'description', content: 'About Gumball and Goodies by Hannah Maria '})
}
