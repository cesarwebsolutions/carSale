import { AlertService } from './../../resources/services/alert.service';
import { RequestLogin } from './../../resources/models/RequestLogin';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/resources/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public login(): void {
    // console.log(this.requestLogin);
    this.loginService.login(this.requestLogin).subscribe(data => {
      this.router.navigate(['dashboard']);
    },
    (error) => {
      console.error(error)
    })
  }

}
