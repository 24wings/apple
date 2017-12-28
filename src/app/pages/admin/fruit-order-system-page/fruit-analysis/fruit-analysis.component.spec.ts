import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitAnalysisComponent } from './fruit-analysis.component';

describe('FruitAnalysisComponent', () => {
  let component: FruitAnalysisComponent;
  let fixture: ComponentFixture<FruitAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
