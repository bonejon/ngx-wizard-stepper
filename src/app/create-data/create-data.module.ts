import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStepOneComponent } from './data-step-one/data-step-one.component';
import { DataStepTwoComponent } from './data-step-two/data-step-two.component';
import { DataStepThreeComponent } from './data-step-three/data-step-three.component';
import { CreateDataContainerComponent } from './create-data-container/create-data-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DataStepOneComponent,
    DataStepTwoComponent,
    DataStepThreeComponent,
    CreateDataContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateDataContainerComponent
  ]
})
export class CreateDataModule { }
