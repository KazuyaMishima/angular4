import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Operation } from '../operation.model';
import { AbstractControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorsService } from 'app/tools/validators.service';
import { FormToolsService } from 'app/tools/form-tools.service';

@Component({
  selector: 'cf-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public operation: Operation;
  public operationForm: FormGroup;

  constructor(
    public operationsService: OperationsService,
    public formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
    public toolService: FormToolsService) { }

  ngOnInit() {
    this.createNewOperation();
    this.buildForm();
  }

  createNewOperation() {
    this.operation = this.operationsService.createNewOperation();
  }

  buildForm() {
    const controls = this.initializeControls();
    this.operationForm = this.formBuilder.group(controls);
  }

  initializeControls() {
    const controls = {
      description: [
        this.operation.description,
        Validators.required
      ],
      amount: [
        this.operation.amount, [
          Validators.required,
          this.validatorsService.positiveNumber
        ]
      ],
      date: [
        this.getDateForControl(this.operation.date),
        Validators.required
      ]
    };
    return controls;
  }

  mustShowErrors(controlName: string) {
    return this
      .toolService
      .mustShowErrors(this.operationForm, controlName);
  }

  getControl(controlName: string): AbstractControl {
    return this.operationForm.controls[controlName];
  }

  getControlErrors(controlName: string): string {
    let controlErrors = '';
    const control = this.getControl(controlName);
    if (control && control.errors) {
      Object.keys(control.errors).forEach(error => {
        controlErrors += error;
      });
    }
    return controlErrors;
  }

  getDateForControl(date: Date): string {
    return date.toISOString().substring(0, 10)
  }

  onSubmit() {
    this.operation = this.operationForm.value;
    this.operationsService.saveOperation(this.operation);
    this.createNewOperation();
  }

}
