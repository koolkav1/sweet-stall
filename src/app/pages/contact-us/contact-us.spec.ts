import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactUs } from './contact-us';
import { WEB3FORMS_ACCESS_KEY } from '../../tokens/web3forms.token';

describe('ContactUs', () => {
  let component: ContactUs;
  let fixture: ComponentFixture<ContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs],
      providers: [{ provide: WEB3FORMS_ACCESS_KEY, useValue: 'test-key' }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
