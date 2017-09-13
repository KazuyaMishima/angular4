import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { ShellComponent } from './shell/shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    TopBarComponent,
    MainContentComponent,
    ShellComponent],
  exports: [
    ReactiveFormsModule,
    ShellComponent
  ]
})
export class ComponentsModule { }
