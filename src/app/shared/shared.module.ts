import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepperComponent } from './wizard-stepper/wizard-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    WizardStepperComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule
  ],
  exports: [
    WizardStepperComponent
  ]
})
export class SharedModule { }
