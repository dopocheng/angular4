import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Users } from '../domain';
import { Observable, throwError } from 'rxjs';
import { UserLogin } from '../domain/userlogin';
import { UserRegister } from '../domain/userregister';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GrtserviceService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor( private http: HttpClient ) { }
  configUrl = "https://imoocqa.gugujiankong.com/api/account/login";
  // login(mobile, password): Observable<string[]> {
  //   return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
  // }
  /**
   * @piktch
   * @登录请求返回数据
   * @param {Login} login 
   * @returns {Observable<UserLogin>} 
   * @memberof GrtserviceService
   */
  login(login : Users): Observable<UserLogin> {
    const params = new HttpParams()
      .set('mobile', login.mobile)
      .set('password', login.password);
      const uri = this.configUrl;
    // 发送 get 请求，处理返回数据
    return this.http.get(uri, { params })
    .pipe(
      map(res => {
        const resLogin = <Users[]>res;
        if (resLogin.length === 0) {
          console.log("throwError")
          throw new Error('用户名不存在或密码错误!');
        }
        // 转换为标准的 json 格式
        let tostr = res.toString();
        let pares = JSON.parse(tostr);
        return {
          uri : this.configUrl,
          login: <Users>pares 
        };
      })
    )
  };

  /**
   * @ piktch
   * 用户注册
   * @param {Users} user 
   * @returns {Observable<UserRegister>} 
   * @memberof GrtserviceService
   */
  register(user: Users): Observable<UserRegister> {
    const uri ='1111111111';
    const params = new HttpParams()
      .set('mobile', user.mobile)
    return this.http.get(uri, { params })
    .pipe(
      switchMap(res => {
        if((<Users[]>res).length > 0) {
          return throwError('该号码已被注册!');
        }
        return this.http.post(uri, user, {headers: this.headers})
        .pipe(
          map(r => ({
            uri: this.configUrl,
            register: <Users>r
          }))
        )
      })
    )
  }
}
