import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ExistingForumsService } from '../../../services/existing-forums.service';

import { ExistingForumsModel } from '../../../models/existing-forums.model';

@Component({
  selector: 'app-existing-forums',
  templateUrl: './existing-forums.component.html',
  styleUrls: ['./existing-forums.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ExistingForumsComponent implements OnInit {

  @Input() siteid: string;

  constructor(private existingForumsService: ExistingForumsService) { }

  displayedColumns = ['forumlink', 'forumname', 'forumnumber'];
  dataSource = new MatTableDataSource<ExistingForumsModel>();

  @ViewChild(MatSort) sort: MatSort;

  getExistingForums(): void {

            this.existingForumsService.getExistingForums(this.siteid).subscribe(data => {

                const existingForums: Array<ExistingForumsModel> = data['data'];
                this.dataSource = new MatTableDataSource<ExistingForumsModel>(existingForums);
              },
              err => {
                 console.log('Observable not returned!', err);
              },
              () => {
                  this.dataSource.sort = this.sort;
              }
            );
          }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.getExistingForums();
  }

}
