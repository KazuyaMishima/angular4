import { Operation } from './operation.model';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { BusService } from 'app/bus.service';


@Injectable()
export class OperationsService {
  private apiUrl = 'priv/operations';
  private operationsCount$: BehaviorSubject<number>;
  private operationsCount = 0;

  constructor(private http: Http, private bus: BusService) {
    this.initialize();
  }

  initialize() {
    this.operationsCount$ = new BehaviorSubject(this.operationsCount);
    this.getOperations$()
      .subscribe(operations => {
        this.operationsCount = operations ? operations.length : 0;
        this.emitOperationCount();
      });
  }

  getOperations$(): Observable<Operation[]> {
    return this.http
      .get(this.apiUrl)
      .map(r => r.json());
  }

  getOperationById$(id): Observable<Operation> {
    return this.http
      .get(this.apiUrl + '/' + id)
      .map(r => r.json());
  }

  newOperation(): Operation {
    return new Operation(new Date(), 0, '', 1, '');
  }

  saveOperation$(newOperation: Operation): Observable<any> {
    return this.http
      .post(this.apiUrl, newOperation)
      .do(r => {
        this.operationsCount++;
        this.emitOperationCount();
      });
  }

  deleteOperation$(operation: Operation): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${operation._id}`)
      .do(r => {
        this.operationsCount--;
        this.emitOperationCount();
      });
  }

  getOperationsCount$(): Observable<number> {
    return this.operationsCount$.asObservable();
  }

  private emitOperationCount() {
    this.operationsCount$.next(this.operationsCount);
    this.bus.emit('operationsInSessionCount: ' + this.operationsCount);
  }

}
