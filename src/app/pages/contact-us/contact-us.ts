import { Component, computed, inject, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import {
  FormField,
  email,
  form,
  minLength,
  required,
} from '@angular/forms/signals';
import {
  ContactFormData,
  ContactService,
  Web3FormsResponse,
} from '../../services/contact.service';
import { Icon } from '../../components/icon/icon';

interface ContactModel {
  name: string;
  email: string;
  date: string;
  venue: string;
  message: string;
}

const EMPTY: ContactModel = {
  name: '',
  email: '',
  date: '',
  venue: '',
  message: '',
};

@Component({
  selector: 'app-contact-us',
  imports: [FormField, Icon],
  templateUrl: './contact-us.html',
})
export class ContactUs {
  private readonly contact = inject(ContactService);

  protected readonly model = signal<ContactModel>({ ...EMPTY });
  protected readonly contactForm = form(this.model, (path) => {
    required(path.name, { message: 'Please share your name.' });
    required(path.email, { message: 'Please share your email.' });
    email(path.email);
    required(path.message, { message: 'Tell us a little about your event.' });
    minLength(path.message, 10);
  });

  private readonly submission = signal<ContactFormData | undefined>(undefined);

  protected readonly result = httpResource<Web3FormsResponse>(() => {
    const data = this.submission();
    return data
      ? this.contact.buildRequest(data, 'New inquiry from Sugar & Sage')
      : undefined;
  });

  protected readonly isSubmitting = computed(() => this.result.isLoading());
  protected readonly submitError = computed(() => this.result.error());
  protected readonly submitted = computed(
    () => this.result.status() === 'resolved' && this.result.value()?.success === true,
  );

  protected onSubmit(event: Event): void {
    event.preventDefault();
    if (this.contactForm().invalid() || this.isSubmitting()) {
      return;
    }
    const v = this.model();
    this.submission.set({
      name: v.name,
      email: v.email,
      event_date: v.date,
      venue: v.venue,
      message: v.message,
    });
  }
}
