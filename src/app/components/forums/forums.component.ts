import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
      this.sub = this.route.params.subscribe(
          params => {
              this.siteid = params['siteid'];
      });
  }


}
