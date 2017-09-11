import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Operation } from '../operation.model';

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
