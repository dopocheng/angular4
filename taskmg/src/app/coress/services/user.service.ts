import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User, Login} from '../models';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({
    // 'Content-Type': 'application/json'
    'content-Type': 'application/x-www-form-urlencoded',
  });
  constructor( private http: HttpClient ) { }
  token = '1309cb215251455c8100928c9880ac24';
  // configUrl = '/backend-api/v1/api/customer/mtmg/login';
  configUrl = '/backend-api/backend-api/v1/api/customer/mtmg/login';

  // login(mobile, password): Observable<string[]> {
  //   return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
  // }
  /**
   * @Pitcher
   * @登录请求返回数据
   * @param {Login} login
   * @returns {Observable<UserLogin>}
   * @memberof GrtserviceService
   */
  Login(login: User): Observable<Login> {
    console.log('login');
    const params = new HttpParams()
      .set('access_token', this.token)
      .set('email', login.email)
      .set('password', login.password);
      const uri = this.configUrl;
    // 发送 get 请求，处理返回数据
    console.log('params', login);
    return this.http.post(uri, { headers: this.headers }, { params } )
    .pipe(
      map(res => {
        console.log('请求成功！！');
        const resLogin = <Login[]>res;
        if (resLogin.length === 0) {
          console.log( 'throwError' );
          throw new Error('用户名不存在或密码错误!');
        }
        // 转换为标准的 json 格式
        // const tostr = res.toString();
        // const pares = JSON.parse(tostr);
        return {
          uri : this.configUrl,
          login: <User>res
        };
      })
    );
  }

  login(s) {
    this.http.post(this.configUrl, {
      'content-Type': 'application/x-www-form-urlencoded',
    },
    {params: {
      'access_token': '1309cb215251455c8100928c9880ac24',
      'email': '747015697@qq.com',
      'password': '123456'
    }
  })
  .subscribe(data => {
      console.log(data);
    });

  }
}
