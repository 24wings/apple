import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitOrderSystemPageComponent } from './fruit-order-system-page.component';

describe('FruitOrderSystemPageComponent', () => {
  let component: FruitOrderSystemPageComponent;
  let fixture: ComponentFixture<FruitOrderSystemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitOrderSystemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitOrderSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
