import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
  selector: 'app-forums-diff-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;

  constructor( public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder ) {
      this.createForm();
    }

    createForm() {
      this.feedbackForm = this.fb.group({
        newForums: ['', Validators.required ],
        archivedNum: '',
        completedSuccessfuly: '',
      });
    }

    // getFeedback(): void {

    //   this.existingForumsService.getExistingForums(this.siteid).subscribe(data => {

    //       const existingForums: Array<ExistingForumsModel> = data['data'];
    //       this.dataSource = new MatTableDataSource<ExistingForumsModel>(existingForums);
    //     },
    //     err => {
    //        console.log('Observable not returned!', err);
    //     },
    //     () => {
    //         this.dataSource.sort = this.sort;
    //     }
    //   );
    // }

    // feedbackForm = new FormGroup ({

    //   archivedNum: new FormControl(),
    //   newForums: new FormControl(),
    //   completedSuccessfuly: new FormControl(),
    // });


  //  onNoClick(): void {
  //   this.dialogRef.close();
  // }

  ngOnInit() {
    // this.getFeedback();
  }

}
