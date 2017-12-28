import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitProductManageComponent } from './fruit-product-manage.component';

describe('FruitProductManageComponent', () => {
  let component: FruitProductManageComponent;
  let fixture: ComponentFixture<FruitProductManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitProductManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
