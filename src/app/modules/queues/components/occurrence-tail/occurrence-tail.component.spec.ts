import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrenceTailComponent } from './occurrence-tail.component';

describe('OccurrenceTailComponent', () => {
  let component: OccurrenceTailComponent;
  let fixture: ComponentFixture<OccurrenceTailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrenceTailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurrenceTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
