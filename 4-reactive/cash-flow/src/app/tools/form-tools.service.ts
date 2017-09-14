import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable()
export class FormToolsService {

  constructor() { }

  mustShowErrors(form: FormGroup, controlName: string) {
    let hasErrorsToShow = false;
    const control = this.getControl(form, controlName);
    if (this.hasChanges(control)) {
      hasErrorsToShow = this.hasErrors(control);
    }
    return hasErrorsToShow;
  }

  hasChanges = (control: AbstractControl) => control.dirty || control.touched;

  hasErrors(control: AbstractControl) {
    return control.errors != null;
  }
  getControl(form: FormGroup, controlName: string): AbstractControl {
    return form.controls[controlName];
  }

}
