import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesNavbarComponent } from './exchanges-navbar.component';

describe('ExchangesNavbarComponent', () => {
  let component: ExchangesNavbarComponent;
  let fixture: ComponentFixture<ExchangesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
