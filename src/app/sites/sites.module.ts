import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { SitesComponent } from './sites.component';
import { SitesService } from './sites.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'sites', component: SitesComponent }
    ])
  ],
  declarations: [SitesComponent],
  providers: [SitesService]
})
export class SitesModule { }
