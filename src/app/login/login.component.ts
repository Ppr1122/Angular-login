import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  constructor(public router: Router, private activatedRoute: ActivatedRoute, private service: AuthserviceService) { }
  ngOnInit(): void {
  }
  login = new FormGroup({
    uname: new FormControl<any>('', [Validators.required, Validators.email]),
    pwd: new FormControl<any>('', [Validators.required, Validators.minLength(6)])
  })
 

  onSubmit() {
    console.log("login");
    alert("success");
    //this.submitted = true;
    var res = this.service.ValidateUser(this.login.value['uname'], this.login.value['pwd']);
    if (res) {
      localStorage.setItem("uname",this.login.value["uname"]);
      localStorage.setItem("pwd",this.login.value["pwd"]);

      this.router.navigate(['dashboard']);
    }
    else {
      alert("Invalid user")
    }
  }

  get uname(): FormControl {
    return this.login.get("uname") as FormControl;
  }
  get password(): FormControl {
    return this.login.get("pwd") as FormControl;
  }
}
