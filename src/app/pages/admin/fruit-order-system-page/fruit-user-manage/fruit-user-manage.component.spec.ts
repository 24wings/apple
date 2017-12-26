import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitUserManageComponent } from './fruit-user-manage.component';

describe('FruitUserManageComponent', () => {
  let component: FruitUserManageComponent;
  let fixture: ComponentFixture<FruitUserManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitUserManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitUserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
