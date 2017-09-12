import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Operation } from '../operation.model';

@Component({
  selector: 'cf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public operations: Operation[];
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operations = this.operationsService.getOperations();
  }

  onDelete(operation) {
    this.operationsService.deleteOperation(operation);
    this.getOperationList();
  }

}
