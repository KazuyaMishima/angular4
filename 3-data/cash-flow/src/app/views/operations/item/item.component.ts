import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operation } from '../operation.model';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'cf-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  _id: any;
  item: Operation;
  constructor(
    private route: ActivatedRoute,
    public operationsService: OperationsService) { }

  ngOnInit() {
    this._id = this.route.snapshot.params['id'];
    this.item = this.operationsService.getOperationById(this._id);
  }

}
