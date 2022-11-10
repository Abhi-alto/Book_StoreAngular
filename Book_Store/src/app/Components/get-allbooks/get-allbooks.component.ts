import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { SharedService } from 'src/app/Services/sharedService/shared.service';

@Component({
  selector: 'app-get-allbooks',
  templateUrl: './get-allbooks.component.html',
  styleUrls: ['./get-allbooks.component.scss']
})
export class GetAllbooksComponent implements OnInit {
  bookList:any;
  message:any;
  constructor(private book:BookService,private share:SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
           
  }
  getAllBooks()
  {
    this.book.getAllBooks().subscribe((res:any)=>{
      console.log(res);
      this.bookList=res.booksList;
      console.log(this.bookList);
    })
  }
  receiveMessage(book:any) 
  {
    console.log(book.bookName);
    this.message=book;                    //gets book from disply book using child parent data sharing
    console.log(this.message);
    this.share.setMessage(this.message);  //for setting the message by using the event reciever at the bottom
    this.router.navigate(["/dashboard/getBook"]);
  }

}
