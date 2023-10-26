import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStepThreeComponent } from './data-step-three.component';

describe('DataStepThreeComponent', () => {
  let component: DataStepThreeComponent;
  let fixture: ComponentFixture<DataStepThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStepThreeComponent]
    });
    fixture = TestBed.createComponent(DataStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
