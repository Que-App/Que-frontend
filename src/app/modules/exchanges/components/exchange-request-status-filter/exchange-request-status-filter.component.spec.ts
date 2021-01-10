import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRequestStatusFilterComponent } from './exchange-request-status-filter.component';

describe('ExchangeRequestStatusFilterComponent', () => {
  let component: ExchangeRequestStatusFilterComponent;
  let fixture: ComponentFixture<ExchangeRequestStatusFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRequestStatusFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRequestStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
