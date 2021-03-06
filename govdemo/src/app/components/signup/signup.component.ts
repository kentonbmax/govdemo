import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup';
import { AuthorizationService } from '../../services/authorization.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public errorMsg = 'There was an issue with your data';
  public signupForm: FormGroup;

  constructor(private router: Router, 
    private auth: AuthorizationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email:
        new FormControl( '', Validators.pattern('^[a-z0-9._%+-]+@inmar.com')),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
  }

  get controls() { return this.signupForm.controls; }

  save() {
    this.auth.signup(this.signupForm.value).subscribe( (data) => {
      this.router.navigateByUrl('');
    }, (err) => {
      this._snackBar.open('Account already exists', 'dismiss', {
        duration: 3000,
      });
  });
  }

}
