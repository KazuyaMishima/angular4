import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from "./tools/components/components.module";
import { AppRoutingModule } from "./app.routing";
import { HomeModule } from "./views/home/home.module";
import { AboutModule } from "./views/about/about.module";
import { OperationsService } from "./views/operations/_data/operations.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HomeModule
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
