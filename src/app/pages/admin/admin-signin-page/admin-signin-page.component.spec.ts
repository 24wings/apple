import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSigninPageComponent } from './admin-signin-page.component';

describe('AdminSigninPageComponent', () => {
  let component: AdminSigninPageComponent;
  let fixture: ComponentFixture<AdminSigninPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSigninPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
