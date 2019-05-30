import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginMdl = { email: '', password: ''};
  public readonly loginForm = new FormGroup({
    email: new FormControl( this.loginMdl.email, [Validators.required, Validators.maxLength(6), Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@inmar.com')]),
    pass: new FormControl(this.loginMdl.password, [Validators.required, Validators.maxLength(6)])
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('contacts');
  }
}
