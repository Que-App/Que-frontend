import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBlockerComponent } from './mobile-blocker.component';

describe('MobileBlockerComponent', () => {
  let component: MobileBlockerComponent;
  let fixture: ComponentFixture<MobileBlockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBlockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
