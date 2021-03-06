import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Site } from '../../models/site.model';
import { SitesService } from '../../services/sites.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SitesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['siteurl', 'bbstype', 'autogf_lastrun', 'autogf_lastsync', 'autogf_priority', 'signalstring'];
  // dataSource = new SiteDataSource(this.sitesService);
  sites: Site[];
  sitesArray: Site[] = [];
  siteElem: Site = {};
  dataSource = new MatTableDataSource<Site>(this.sitesArray);
  errorMessage = 'Error occurred!';

  constructor(private sitesService: SitesService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {

  }

  applyFilter(filterValue: string) {
    console.log(this.sites);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.sitesService.getSites()
    .subscribe(data => this.sites = <Site[]>data['data'],
               error => this.errorMessage = <any>error,
               () => {
                  let elem;
                  this.sites.forEach(element => {
                    elem = JSON.parse(element.signals);
                    if (elem !== null) {
                      element.signalstring = elem.signals.join();
                      element.signalsum = elem.sum;
                    } else {
                      element.signalstring = '';
                    }
                  });
                  this.dataSource = new MatTableDataSource<Site>(this.sites);
                  this.dataSource.sort = this.sort;
                  this.dataSource.paginator = this.paginator;
                });
  }

}

export class SiteDataSource extends DataSource<any> {
  constructor(private sitesService: SitesService) {
    super();
  }
  connect(): Observable<Site[]> {
    return this.sitesService.getSites();
  }
  disconnect() {}
}
