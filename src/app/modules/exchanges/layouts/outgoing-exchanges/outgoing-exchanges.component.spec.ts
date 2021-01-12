import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingExchangesComponent } from './outgoing-exchanges.component';

describe('OutgoingExchangesComponent', () => {
  let component: OutgoingExchangesComponent;
  let fixture: ComponentFixture<OutgoingExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
