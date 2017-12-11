import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { ExistingForumsComponent } from './existing-forums/existing-forums.component';
import { ExisitngForumsService } from './existing-forums/existing-forums.service';
import { NewforumsComponent } from './new-forums/new-forums.component';
import { NewforumsService } from './new-forums/new-forums.service';
import { ForumsComponent } from './forums.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'forums', component: ForumsComponent }
    ])
  ],
  exports: [ExistingForumsComponent, NewforumsComponent],
  declarations: [ExistingForumsComponent, NewforumsComponent, ForumsComponent],
  providers: [ExisitngForumsService, NewforumsService]
})
export class ForumsModule { }
