import { LoginDoisService } from './../resources/services/login-dois.service';
import { RequestLoginDois } from './../resources/models/RequestLoginDois';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dois',
  templateUrl: './login-dois.component.html',
  styleUrls: ['./login-dois.component.css']
})
export class LoginDoisComponent implements OnInit {

  public requestLoginDois!: RequestLoginDois;

  constructor(private loginDoisService: LoginDoisService) { }

  ngOnInit(): void {
    this.requestLoginDois = new RequestLoginDois();
  }

  public loginDois() :void{
    this.loginDoisService.doLoginDois(this.requestLoginDois).subscribe(qlqnome => {
      console.log(qlqnome);
    },
    (err) => {
      console.error(err);
      
    });
  }

}
