import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private router: Router, private auth: AuthorizationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        '', [Validators.required, Validators.maxLength(6), Validators.pattern('^[a-z0-9._%+-]+@inmar.com')]),
      pass: new FormControl('', [Validators.required, Validators.maxLength(6)])
    });
  }

  get controls() { return this.loginForm.controls; }

  login() {
    let res = this.auth.login(this.loginForm.value);

  }
}
