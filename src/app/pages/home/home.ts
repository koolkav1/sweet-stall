import { Component, computed, inject, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import {
  FormField,
  email,
  form,
  required,
} from '@angular/forms/signals';
import {
  ContactFormData,
  ContactService,
  Web3FormsResponse,
} from '../../services/contact.service';
import { Icon } from '../../components/icon/icon';
import { ImageService } from '../../services/image.service';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface CtaModel {
  name: string;
  email: string;
  date: string;
}

const EMPTY: CtaModel = { name: '', email: '', date: '' };

@Component({
  selector: 'app-home',
  imports: [FormField, Icon, RouterLink],
  templateUrl: './home.html',
})
export class Home {
  private readonly contact = inject(ContactService);
  readonly images = inject(ImageService);
  readonly title = inject(Title).setTitle('Gummbal & Goodies Wedding Sweet Cart Home Page');
  readonly description = inject(Meta).updateTag({name: 'description', content: 'Elevate your celebration with our bespoke sweet carts. Artisanal treats, elegantly styled to complement your wedding aesthetic, creating unforgettable moments of professional joy.'})

  protected readonly model = signal<CtaModel>({ ...EMPTY });
  protected readonly ctaForm = form(this.model, (path) => {
    required(path.name, { message: 'Please share your name.' });
    required(path.email, { message: 'Please share your email.' });
    email(path.email);
  });

  private readonly submission = signal<ContactFormData | undefined>(undefined);

  protected readonly result = httpResource<Web3FormsResponse>(() => {
    const data = this.submission();
    return data
      ? this.contact.buildRequest(data, 'New inquiry from Sugar & Sage (home CTA)')
      : undefined;
  });

  protected readonly isSubmitting = computed(() => this.result.isLoading());
  protected readonly submitError = computed(() => this.result.error());
  protected readonly submitted = computed(
    () => this.result.status() === 'resolved' && this.result.value()?.success === true,
  );

  protected onSubmit(event: Event): void {
    event.preventDefault();
    if (this.ctaForm().invalid() || this.isSubmitting()) {
      return;
    }
    const v = this.model();
    this.submission.set({
      name: v.name,
      email: v.email,
      wedding_date: v.date,
      message: 'Inquiry submitted from homepage CTA.',
    });
  }
}
