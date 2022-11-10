import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetBookComponent } from '../../getBook/get-book/get-book.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log(this.childMessage);
  }
  view(book:any)
  {
    console.log(book.bookName);
    this.messageEvent.emit(book);
  }

}
