import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../Services/common-service.service';
import { UserCredential } from '../../Models/UserCredentialModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private readonly urlLogin = "api/Authentication/UserLogin";

  _commonServices: CommonService;
  _httpClient: HttpClient;

  userCredential: UserCredential = { userName: '', password: '' };
  user: any;

  constructor(@Inject(HttpClient) httpClient: HttpClient, private fb: FormBuilder, private auth:AuthenticationService,private router: Router,) {
    this._httpClient = httpClient;
    this._commonServices = new CommonService(httpClient);
  }

  form: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.email, Validators.min(10)]],
    password: ['', [Validators.required, Validators.min(10)]]
  });

  login() {
    this.userCredential = {
      userName: this.form.value.userName,
      password: this.form.value.password,
    }


    this._commonServices.postData(this.urlLogin, this.userCredential).then(data => {

      const helper = new JwtHelperService();
      this.user = helper.decodeToken(data.token.jwtToken)
      localStorage.setItem('currentUser', JSON.stringify(helper.decodeToken(data.token.jwtToken)));
      localStorage.setItem('JwtToken', data.token.jwtToken);

      this.router.navigateByUrl("/dashboard/employee")
    });
  }
}
