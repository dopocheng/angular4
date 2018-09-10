import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from '../domain';
import { Observable } from 'rxjs';
import { UserLogin } from '../domain/userlogin';

@Injectable({
  providedIn: 'root'
})

export class GrtserviceService {
  
  
  User = {
    UserId: '5aacdf7e647eb4ad6cc1c67a',
    UserNickName: 'null',
    Status: 'OK'
  };
  
  constructor( private http: HttpClient ) { 
   }
  configUrl = "https://imoocqa.gugujiankong.com/api/account/login";

  // login() {
  //   console.log("this.http",this.http)
  //   return this.http.get(this.configUrl);
  // }

  // login(mobile, password): Observable<string[]> {
  //   return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
  // }

  login(login : Login): Observable<UserLogin> {
    const params = new HttpParams()
      .set('mobile', login.mobile)
      .set('password', login.password);
      const uri = this.configUrl;
    return this.http.get(uri, { params })
    .pipe(
      
      map(res => {
        const resLogin = <Login[]>res;
        if (resLogin.length === 0) {
          console.log("throw")
          throw new Error('Username or password incorrect');
        }
        let tostr = res.toString();
        let lres = JSON.parse(tostr)
        return {
          uri : this.configUrl,
          login: <Login>lres 
        };
      })
    )
  }

}
