import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations.routing';
import { OperationsComponent } from './operations.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RowComponent } from './list/row/row.component';
import { OperationsService } from './operations.service';
import { ComponentsModule } from 'app/tools/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    OperationsRoutingModule
  ],
  declarations: [
    OperationsComponent,
    NewComponent,
    ListComponent,
    ItemComponent,
    RowComponent
  ],
  providers: [
    OperationsService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class OperationsModule { }
