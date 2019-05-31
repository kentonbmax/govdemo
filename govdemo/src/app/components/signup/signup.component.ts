import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private signup: SignUp = new SignUp();
  public errorMsg = 'There was an issue with your data';
  public signupForm: FormGroup;

  constructor(private router: Router, private auth: AuthorizationService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email:
        new FormControl( this.signup.email, Validators.pattern('^[a-z0-9._%+-]+@inmar.com')),
      password: new FormControl(this.signup.password, [Validators.required, Validators.minLength(6)]),
      firstName: new FormControl(this.signup.firstName, [Validators.required]),
      lastName: new FormControl(this.signup.lastName, [Validators.required]),
    });
  }

  get controls() { return this.signupForm.controls; }

  save() {
    this.auth.signup(this.signupForm.value).subscribe( (data) => {
      this.router.navigateByUrl('');
    }, err => {

    });
  }

}
