import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list-display',
  templateUrl: './wish-list-display.component.html',
  styleUrls: ['./wish-list-display.component.scss']
})
export class WishListDisplayComponent implements OnInit {
  @Input() childMessage: any;
  constructor() { }

  ngOnInit(): void {
  }

}
