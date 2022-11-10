import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message:any;
  constructor() { }

  setMessage(data: any)    //for sending the message to the sibiling
  {
    this.message=data;
  }
  getMessage()          //for getting the message by the sibiling
  {
    return this.message;
  }
}
