import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrtserviceService {

  constructor( private http: HttpClient ) {  }
  configUrl = "https://imoocqa.gugujiankong.com/api/account/login?mobile=13851468237&password=123123";

  // login() {
  //   console.log("this.http",this.http)
  //   return this.http.get(this.configUrl);
  // }

  // login(mobile, password): Observable<string[]> {
  //   return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
  // }

  login() {
    return this.http.get(this.configUrl)
    .pipe(
      map(res => {
        console.log("www", res)
      })
    );
  }

}
