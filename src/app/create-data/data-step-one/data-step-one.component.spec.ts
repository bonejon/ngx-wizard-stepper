import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStepOneComponent } from './data-step-one.component';

describe('DataStepOneComponent', () => {
  let component: DataStepOneComponent;
  let fixture: ComponentFixture<DataStepOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStepOneComponent]
    });
    fixture = TestBed.createComponent(DataStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
