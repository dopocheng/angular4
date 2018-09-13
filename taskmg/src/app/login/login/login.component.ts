import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(  public userService: UserService) { }

  mockLogin: User = {
    email: 'x_p5201314xp@qq.com',
    password: '123456',
    access_token: '1309cb215251455c8100928c9880ac24'
  };

  ngOnInit() {
  }

  login() {
    this.userService.Login(this.mockLogin)
    console.log('ee')
  }

}
