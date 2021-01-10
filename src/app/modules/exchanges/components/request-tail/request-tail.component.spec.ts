import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTailComponent } from './request-tail.component';

describe('RequestTailComponent', () => {
  let component: RequestTailComponent;
  let fixture: ComponentFixture<RequestTailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
