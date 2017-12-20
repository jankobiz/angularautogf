import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { FeedbackComponent } from './feedback/feedback.component';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  private sub: Subscription;
  siteid = '';

  constructor(public dialog: MatDialog, private route: ActivatedRoute,
    private router: Router) {}


  openFeedbackForm(): void {
    let dialogRef = this.dialog.open(FeedbackComponent, {
        width: '400px',
      //  data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(
          params => {
              this.siteid = params['siteid'];
      });
  }


}
