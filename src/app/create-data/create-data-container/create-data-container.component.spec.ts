import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataContainerComponent } from './create-data-container.component';

describe('CreateDataContainerComponent', () => {
  let component: CreateDataContainerComponent;
  let fixture: ComponentFixture<CreateDataContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDataContainerComponent]
    });
    fixture = TestBed.createComponent(CreateDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
