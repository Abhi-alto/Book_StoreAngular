import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any;
  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token');
  }
  getAllBooks()
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
      'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
    })
  }
  return this.http.getService("https://localhost:44378/Book/GetAllBook",true,header);
  }
  getBook(id:any) 
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
      'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
    })
  }
  return this.http.getService(`https://localhost:44378/Book/GetBook?bookId=${id}`,true,header);
  }
}
