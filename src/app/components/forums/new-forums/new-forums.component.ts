import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NewForumsService } from '../../../services/new-forums.service';

import { NewForumsModel } from '../../../models/new-forums.model';

@Component({
  selector: 'app-new-forums',
  templateUrl: './new-forums.component.html',
  styleUrls: ['./new-forums.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class NewForumsComponent implements OnInit {

  constructor(private newForumsService: NewForumsService) { }

  displayedColumns = ['forumlink', 'forumname', 'forumnumber'];
  dataSource = new MatTableDataSource<NewForumsModel>();

  @ViewChild(MatSort) sort: MatSort;

  getNewForums(): void {

        this.newForumsService.getNewForums().subscribe(data => {
            const result = data['data'];
            const newForums: Array<NewForumsModel> = [];
            for (const row of result){
              for (const forum of JSON.parse(row.forums)){
                newForums.push(forum);
              }
            }
            this.dataSource = new MatTableDataSource<NewForumsModel>(newForums);
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
    this.getNewForums();
  }

}




