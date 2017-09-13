import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operation } from 'app/views/operations/operation.model';


@Component({
  selector: 'cf-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() public operation: any;
  @Output() public delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.delete.emit();
  }

}
