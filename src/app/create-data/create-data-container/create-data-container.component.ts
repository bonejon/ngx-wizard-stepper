import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WizardStep } from 'src/app/shared/wizard-stepper/wizard-stepper.component';

@Component({
  selector: 'app-create-data-container',
  templateUrl: './create-data-container.component.html',
  styleUrls: ['./create-data-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDataContainerComponent {
  currentStep: number = 2;
  readonly steps: WizardStep[] = [{
    label: 'Step 1'
  }, {
    label: 'Step 2'
  }, {
    label: 'Step 3'
  }];
}
