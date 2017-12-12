import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { SitesComponent } from './sites.component';
import { SitesService } from '../../services/sites.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'sites', component: SitesComponent }
    ])
  ],
  declarations: [SitesComponent],
  providers: [SitesService]
})
export class SitesModule { }
