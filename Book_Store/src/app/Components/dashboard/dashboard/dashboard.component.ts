import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllbooksComponent } from '../../get-allbooks/get-allbooks.component'; 
import { WishListComponent } from '../../wishList/wish-list/wish-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }
  Wish()
  {
    this.router.navigate(["/dashboard/WishList"]);
  }

}
