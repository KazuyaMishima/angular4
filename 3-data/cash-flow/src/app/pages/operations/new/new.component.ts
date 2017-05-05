import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  template: `
    <p>
      new Works!
    </p>
    <form>
      <input  [(ngModel)]="operation.amount" type="number"/>
      <button (click)="saveOperation()">Save</button>
    </form>
  `,
  styles: []
})
export class NewComponent implements OnInit {
  public operation: any;
  constructor(public data: DataService) { }

  ngOnInit() {
    this.operation = {
      amount: 0
    }
  }

  saveOperation() {
    this.data.operations.push(this.operation);
  }

}
