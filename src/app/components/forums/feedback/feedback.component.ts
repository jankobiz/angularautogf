import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forums-diff-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor( public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    feedbackForm = new FormGroup ({

      archivedNum: new FormControl(),
      newForums: new FormControl(),
      completedSuccessfuly: new FormControl(),
    });


  //  onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // ngOnInit(); {

  // }

}
