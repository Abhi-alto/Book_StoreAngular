import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpService) { }
}
