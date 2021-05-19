import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidatorService } from '../../services/passwordvalidator.service';
import { SigninService } from '../../services/signin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  form: FormGroup;
  invalidLoginMessage;
  constructor(fb: FormBuilder,
    private signinService: SigninService,
    private route: ActivatedRoute) {

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
        PasswordValidatorService.cannotContainSpace])]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => { //subscribe is like observable which pass the vaule of parameter
      this.invalidLoginMessage = params.invalidLoginMessage;
    });
  }

  login() {
    const result = this.signinService.login(this.form.controls.username.value,
      this.form.controls.password.value);
    if (!result) {
      this.form.controls.password.setErrors({
        invalidLogin: true
      });
    }
  }
}