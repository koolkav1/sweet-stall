import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { WEB3FORMS_ACCESS_KEY } from '../../tokens/web3forms.token';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [{ provide: WEB3FORMS_ACCESS_KEY, useValue: 'test-key' }],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
