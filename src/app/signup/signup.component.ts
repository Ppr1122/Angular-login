import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  onsubmitted = false;
  constructor(public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  SignUp = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("[^@]*@[^@]*")]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    City: new FormControl('', [Validators.required,Validators.maxLength(8)])
  });
  onSubmit() {
    this.onsubmitted = true;
    if (this.SignUp.valid) {

      this.router.navigateByUrl("/login")
      console.log(this.SignUp.value);
    }
  }
  get firstName(): FormControl {
    return this.SignUp.get("firstname") as FormControl;
  }
  get lastName(): FormControl {
    return this.SignUp.get("lastname") as FormControl;
  }
  get email(): FormControl {
    return this.SignUp.get("email") as FormControl;
  }
  get PhoneNo(): FormControl {
    return this.SignUp.get("phoneNo") as FormControl;
  }
  get City(): FormControl {
    return this.SignUp.get("City") as FormControl;
  }

}
