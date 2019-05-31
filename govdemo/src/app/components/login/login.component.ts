import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean;
  constructor(private router: Router,
    private auth: AuthorizationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(
        '', [Validators.required, Validators.maxLength(6), Validators.pattern('^[a-z0-9._%+-]+@inmar.com')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(6)])
    });
  }

  get controls() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    this.auth.login(this.loginForm.value).subscribe( (data) => {
      localStorage.setItem('token', 'true');
      this.router.navigateByUrl('contacts');
  }, (err) => {
      localStorage.setItem('token', 'false');
      this._snackBar.open('You are not authorized', 'dismiss', {
        duration: 3000,
      });
  });

  }
}
