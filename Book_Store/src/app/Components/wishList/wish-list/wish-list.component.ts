import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
bookList:any;

  constructor() { }

  ngOnInit(): void {
  }
  getWishList()
  {
    
  }

}
