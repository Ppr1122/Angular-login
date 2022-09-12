import { Injectable } from '@angular/core';
//import { map } from 'rxjs';
//import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  ValidateUser(_username: string | null | undefined,_password: string | null | undefined){
    return true;

  }
}

