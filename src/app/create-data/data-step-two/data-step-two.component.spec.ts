import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStepTwoComponent } from './data-step-two.component';

describe('DataStepTwoComponent', () => {
  let component: DataStepTwoComponent;
  let fixture: ComponentFixture<DataStepTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataStepTwoComponent]
    });
    fixture = TestBed.createComponent(DataStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
