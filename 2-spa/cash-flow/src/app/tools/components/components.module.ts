import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopBarComponent, MainContentComponent, ShellComponent],
  exports: [ShellComponent]
})
export class ComponentsModule { }
