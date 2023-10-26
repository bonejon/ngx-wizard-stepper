import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

export interface WizardStep {
  label: string
}



@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepperComponent {
  @ViewChild(MatStepper, { static: true }) private stepper!: MatStepper;
  @Input() wizardSteps!: WizardStep[];

  @Output() selectStep: EventEmitter<number> = new EventEmitter<number>();

  get currentIndex(): number {
    return this.stepper?.selectedIndex;
  }
  @Input() set currentIndex(e: number) {
    if (this.stepper) {
      this.stepper.selectedIndex = e;
    }
  }
}
