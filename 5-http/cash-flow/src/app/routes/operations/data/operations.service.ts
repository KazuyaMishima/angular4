import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class OperationsService {
  private apiUrl = 'http://localhost:3030/api/pub/items';
  private operationsCount$: BehaviorSubject<number>;
  private operationsCount = 0;
  constructor(private http: Http) {
    this.operationsCount$ = new BehaviorSubject(this.operationsCount);
    this.getOperations()
      .subscribe(operations => {
        this.operationsCount = operations.length;
        this.emitOperationCount();
      });

  }

  getOperations(): Observable<Operation[]> {
    return this.http.get(this.apiUrl).map(r => r.json());
  }

  newOperation(): Operation {
    return new Operation(new Date(), 0, "", 1, "");
  }

  saveOperation(newOperation: Operation) {
    this.http.post(this.apiUrl, newOperation)
      .subscribe(r => {
        this.operationsCount++;
        this.emitOperationCount();
      });
  }

  deleteOperation(operation: Operation): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${operation._id}`)
      .do(r => {
        this.operationsCount = this.operationsCount - 1;
        this.emitOperationCount();
      });
  }

  getOperationsCount$(): Observable<number> {
    return this.operationsCount$.asObservable();
  }

  private emitOperationCount() {
    this.operationsCount$.next(this.operationsCount);
  }

}
