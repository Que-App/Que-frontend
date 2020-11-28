import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationComponent } from './authorisation.component';

describe('AuthorisationComponent', () => {
  let component: AuthorisationComponent;
  let fixture: ComponentFixture<AuthorisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
