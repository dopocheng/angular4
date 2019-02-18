import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../coress/services/user.service';
import { User } from '../../coress/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(  
    public userService: UserService,
    public fb: FormBuilder
  ) { }

  mockLogin: User = {
    email: 'x_p5201314xp@qq.com',
    password: '123456',
    access_token: '1309cb215251455c8100928c9880ac24'
  };

  ngOnInit() {
    // 表单少量初始化
    // this.form = new FormGroup({
      // email: new FormControl('dpc', Validators.required),
    //   email: new FormControl('dpc', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl()
    // })
  this.form = this.fb.group({
    email: ['dp', Validators.compose([Validators.required ,Validators.email, this.validate])], // 
    password: ['', Validators.required] 
  });
  console.log(this.form.controls['email'].errors)
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(valid);
    // 提交时验证加些条件判断
    // this.form.controls['email'].setValidators(this.validate);
  }

  // 自定义验证器
  validate(c: FormControl): {[key: string]: any} {
    if(!c.value) {
      return null;
    }

    const pattern = /^dpc+/;
    if(pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'The email must start with dpc'
    }
  }

  login() {
    this.userService.Login(this.mockLogin)
    console.log('ee')
  }

}
