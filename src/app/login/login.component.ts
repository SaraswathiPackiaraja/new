import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datas: any;
  logins: any;
  out: any;
  constructor(private _loginservice: LoginService, private http: HttpClient) { }
  form = new FormGroup({

    username: new FormControl(null, Validators.required),
    password: new FormControl()
  });
  ngOnInit() {

    this._loginservice.getUSers()
      .subscribe(data => {
        console.log(data);
        this.datas = data;

      });
  }

  onClickSubmit() {
    const res = this.datas;
    
    let uname = this.form.value.username;
    let psword = this.form.value.password;
    
   console.log(res[0].username,res[0].password);
    
    for(var _i=0; _i<res.length;_i++)
    {
      if(res[_i].username==uname && res[_i].password==psword)
      {
         console.log("Login sucessfully");
      }
      else if(res[_i].username!=uname && res[_i].password==psword)
      {
        console.log("Enter correct username and password");
      }
      else if(res[_i].username==uname && res[_i].password!=psword)
      {
        console.log("Enter correct username and password");
      }
    }

    
  }

}