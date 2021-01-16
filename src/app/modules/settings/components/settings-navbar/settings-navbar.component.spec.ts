import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNavbarComponent } from './settings-navbar.component';

describe('SettingsNavbarComponent', () => {
  let component: SettingsNavbarComponent;
  let fixture: ComponentFixture<SettingsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
