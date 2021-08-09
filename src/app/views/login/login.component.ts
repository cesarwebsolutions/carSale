import { AlertService } from './../../resources/services/alert.service';
import { RequestLogin } from './../../resources/models/RequestLogin';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public login(): void {
    this.loginService.login(this.requestLogin).subscribe((qlqnome) =>{
      this.alertService.info('Logou')
    },
      httpErro => {
        this.alertService.error(httpErro.error.message)
        
    });
  }

}
