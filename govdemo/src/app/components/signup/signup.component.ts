import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public readonly signupForm = new FormGroup({
    email: new FormControl('email'),
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
