import { Component, OnInit } from '@angular/core';
import { OperationsService } from "../_data/operations.service";
import { Operation } from "../_data/operation.model";

@Component({
  selector: 'cf-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public operation: Operation;

  constructor(private operationsService: OperationsService) {

  }

  ngOnInit() {
    this.createNewOperation();
  }

  createNewOperation() {
    this.operation = this.operationsService.createNewOperation();
  }

  saveOperation() {
    this.operationsService.saveOperation(this.operation);
    this.createNewOperation();
  }

}
