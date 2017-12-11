import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { DatatableComponent } from './datatable.component';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    DatatableComponent
  ],
  declarations: [
    DatatableComponent
  ]
})
export class DatatableModule { }
