import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './tools/components/components.module';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './views/home/home.module';
import { AboutModule } from './views/about/about.module';
import { ValidatorsService } from 'app/tools/validators.service';
import { FormToolsService } from 'app/tools/form-tools.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    FormToolsService,
    ValidatorsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
