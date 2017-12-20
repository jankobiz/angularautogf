import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ExistingForumsComponent } from './existing-forums/existing-forums.component';
import { ExistingForumsService } from '../../services/existing-forums.service';
import { NewForumsComponent } from './new-forums/new-forums.component';
import { NewForumsService } from '../../services/new-forums.service';
import { ForumsComponent } from './forums.component';

import { FeedbackComponent } from './feedback/feedback.component';

import { ForumsRouteGuard } from './shared/forums-route.guard';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'forums/:siteid',
        component: ForumsComponent,
        canActivate: [ForumsRouteGuard]
      }
    ])
  ],
  exports: [ExistingForumsComponent, NewForumsComponent],
  declarations: [ExistingForumsComponent, NewForumsComponent, ForumsComponent, FeedbackComponent],
  entryComponents: [ FeedbackComponent ],
  providers: [ExistingForumsService, NewForumsService, ForumsRouteGuard]

})
export class ForumsModule { }
