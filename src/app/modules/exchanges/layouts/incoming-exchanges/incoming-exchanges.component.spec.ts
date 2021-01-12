import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingExchangesComponent } from './incoming-exchanges.component';

describe('IncomingExchangesComponent', () => {
  let component: IncomingExchangesComponent;
  let fixture: ComponentFixture<IncomingExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
