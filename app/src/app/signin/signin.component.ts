import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public errorMessage: string;
  public errorCode: string;

  constructor(private auth: AuthService, private router: Router) { 
    this.auth.getErrorMessage().subscribe(error => {
      this.errorMessage = error;
    });
    this.auth.getErrorCode().subscribe(error => {
      this.errorCode = error;
    });
  }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', Validators.required)
  });


  ngOnInit() {
  }

  googleSignIn() {
    this.auth.googleSignIn();
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  emailSignIn(form){
    this.auth.emailSignIn(form);
  }

}
