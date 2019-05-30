import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private signUp: SignUp = new SignUp();
  public readonly signupForm = new FormGroup({
    email: new FormControl( this.signUp.email, Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@inmar.com')),
    password: new FormControl('password'),
    firstName: new FormControl('firstName'),
    lastName: new FormControl('lastName'),
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.router.navigateByUrl('');
  }

}
