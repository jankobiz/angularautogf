import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { LOCATION_INITIALIZED } from '@angular/common';

import { ForumsCompareFeedbackService } from '../../../services/forums-compare-feedback.service';



@Component({
  selector: 'app-forums-diff-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  // TO DO - get id as param
  id = '1';

  constructor( public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private forumsCompareFeedbackService: ForumsCompareFeedbackService ) {
      this.createForm();
    }

    createForm() {
      this.feedbackForm = this.fb.group({
        newForums: ['', Validators.required ],
        archivedNum: '',
        completedSuccessfuly: '',
      });
    }

    getFeedback(): void {

      this.forumsCompareFeedbackService.getFeedback(this.id).subscribe(data => {

          console.log(data);
          const feedback = JSON.parse(data.feedback);
          console.log(feedback);

          this.feedbackForm.setValue({
            newForums:    feedback.newForums,
            archivedNum:  feedback.archivedNum,
            completedSuccessfuly: feedback.completedSuccessfuly,
          });



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

   
    // feedbackForm = new FormGroup ({

    //   archivedNum: new FormControl(),
    //   newForums: new FormControl(),
    //   completedSuccessfuly: new FormControl(),
    // });


  //  onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit() {
    this.getFeedback();
  }

}
