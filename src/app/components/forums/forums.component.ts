import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';

import { FeedbackComponent } from './feedback/feedback.component';

import { FeedbackModel } from '../../models/forums-feedback.model';
import { ForumsCompareFeedbackService } from '../../services/forums-compare-feedback.service';


@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  private sub: Subscription;
  siteid = '';

  constructor(public dialog: MatDialog, private route: ActivatedRoute,
    private router: Router,
    private forumsCompareFeedbackService: ForumsCompareFeedbackService ) {}


  openFeedbackForm(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
        width: '400px',
      //  data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result: ', result);

      if (!result) {return;}

      // const feedback: FeedbackModel = {
      //   id: 0,
      //   feedback: result.controls.newForums
      // };
      const feedback = {feedback: JSON.stringify({
        'newForums': result.controls.newForums.value,
        'archivedNum': result.controls.archivedNum.value,
        'completedSuccessfuly': result.controls.completedSuccessfuly.value
      })};

      // TO DO add result id
      this.editFeedback('1', feedback);

    });
  }

  editFeedback(id: string, body): void {

    this.forumsCompareFeedbackService.editFeedback(id, body).subscribe(data => {

        console.log('PATCH response', data);
       
        // this.dataSource = new MatTableDataSource<FeedbackModel>(existingForums);
      },
      err => {
         console.log('Observable not returned!', err);
      },
      // () => {
      //     this.dataSource.sort = this.sort;
      // }
    );
  }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(
          params => {
              this.siteid = params['siteid'];
      });
  }

}
