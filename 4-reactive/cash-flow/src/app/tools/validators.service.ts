import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ValidatorsService {

  constructor() { }

  positiveNumber(control: AbstractControl) {
    let error = null;
    const value = control.value;
    if (value !== undefined && (isNaN(value) || value < 0)) {
      error = { 'positive': 'Must be a positive number' };
    }
    return error;
  }
}
