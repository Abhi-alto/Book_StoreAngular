import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  token:any;
  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token');
  }
  AddInWishList(data:any)
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
      'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
    })
  }
  return this.http.postService("https://localhost:44378/WishList/AAddToWishList",data,true,header);
  }
}
