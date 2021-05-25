import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class LoginService {
  private _url: string ="/assets/Data/data.json";

  constructor(private http: HttpClient) { }

  getUSers()
  {
    return this.http.get(this._url);
  }
}
