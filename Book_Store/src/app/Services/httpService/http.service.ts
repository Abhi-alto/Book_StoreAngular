import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  postService(url:string, reqdata:any, token:boolean=false, httpOptions:any)
  {
    console.log(reqdata);
    return this.httpclient.post(url, reqdata, token && httpOptions)
  }
  putService(url:string, reqdata:any, token:boolean=false, httpOptions:any)
  {
    console.log(reqdata);
    return this.httpclient.put(url,reqdata,  token && httpOptions)
  }
}
