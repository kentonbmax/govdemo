import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public readonly signupForm = new FormGroup({
    firstName: new FormControl('firstName'),
    lastName: new FormControl('lastName')
  });
  constructor() { }

  ngOnInit() {
  }

}
