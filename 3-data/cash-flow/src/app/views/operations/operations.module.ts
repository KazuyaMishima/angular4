import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OperationsRoutingModule } from './operations.routing';
import { OperationsComponent } from './operations.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { RowComponent } from './list/row/row.component';
import { OperationsService } from './operations.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OperationsRoutingModule
  ],
  declarations: [
    OperationsComponent, NewComponent, ListComponent, ItemComponent, RowComponent
  ],
  providers: [OperationsService]
})
export class OperationsModule { }
