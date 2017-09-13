import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Operation } from '../operation.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public operations = new Array<Operation>();
  public operations$: Observable<Operation[]>;
  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operations$ = this.operationsService.getOperations$();
    this.operationsService.getOperations$().subscribe(r => this.operations = r);
  }

  onDelete(operation) {
    this.operationsService
      .deleteOperation$(operation)
      .subscribe(
      r => this.getOperationList()
      );
  }

}
