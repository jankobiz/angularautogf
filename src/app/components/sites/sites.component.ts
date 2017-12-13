import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SitesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['login', 'id', 'url', 'created_at'];
  // dataSource = new UserDataSource(this.userService);
  users: User[];
  dataSource = new MatTableDataSource<User>(this.users);
  errorMessage = 'Error occurred!';

  constructor(private userService: UserService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    console.log(this.users);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.userService.getUser()
    .subscribe(users => this.users = users,
               error => this.errorMessage = <any>error,
               () => console.log(this.users));
  }

}
const USER_DATA: User[] = [
  {
    login: 'Leanne Graham',
    id: 'Sincere@april.biz',
    url: '1-770-736-8031 x56442',
    created_at: 'dadfaafffaa',
  },
  {
    login: 'Ervin Howell',
    id: 'Shanna@melissa.tv',
    url: '010-692-6593 x09125',
    created_at: 'Deckow-Crist',
  }
];
// export class UserDataSource extends DataSource<any> {
//   constructor(private userService: UserService) {
//     super();
//   }
//   connect(): Observable<User[]> {
//     return this.userService.getUser();
//   }
//   disconnect() {}
// }
