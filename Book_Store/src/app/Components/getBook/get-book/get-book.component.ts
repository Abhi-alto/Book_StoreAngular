import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/app/Services/bookService/book.service';
import { SharedService } from 'src/app/Services/sharedService/shared.service';
@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {
  Book: any;
  messageBook: any;
  constructor(private book: BookService,private share:SharedService) { }

  ngOnInit(): void {
    this.messageBook=this.share.getMessage();
    console.log("In the book");
    this.GetBook();
  }
  GetBook() 
  {
    console.log("Name is - "+ this.messageBook.bookName);
      this.book.getBook(this.messageBook.id).subscribe((res: any) => {
        console.log(res);
    })
  }
}
