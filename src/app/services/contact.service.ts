import { Injectable, inject } from '@angular/core';
import { HttpResourceRequest } from '@angular/common/http';
import { WEB3FORMS_ACCESS_KEY } from '../tokens/web3forms.token';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  [key: string]: unknown;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly accessKey = inject(WEB3FORMS_ACCESS_KEY);

  buildRequest(data: ContactFormData, subject: string): HttpResourceRequest {
    return {
      url: WEB3FORMS_ENDPOINT,
      method: 'POST',
      body: {
        access_key: this.accessKey,
        subject,
        ...data,
      },
    };
  }
}
