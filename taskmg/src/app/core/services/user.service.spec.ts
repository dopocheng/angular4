import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService]
    });
  });

  // beforeEach(() => {
  //   // service = new GrtserviceService(http);
  //   TestBed.configureTestingModule({
  //     imports: [HttpClientModule],
      // providers: [// 不能有providers冲突 http 未定义
      //   {
      //     //  provide: HttpClient,
      //     // deps: [GrtserviceService]
      //   },
      // ]
  //   }).compileComponents();
  // });

  it('登录au',
    async(inject(
      [UserService], (service: UserService) => {
        console.log( 'service' , service);
        const mockLogin: User = {
          email: '747015697@qq.com',
          password: '123456'
        };
        service.login(mockLogin).subscribe(res => {
          res = res;
          console.log(typeof(res));
          console.log(res);
          // let js = JSON.parse(res);
          // console.info("js", js);
          console.log( 'resD' , res.uri);
          console.log( '444', res.login.data.customerNumber);
          expect(res.login.data.customerNumber).toEqual(123620);
        });
      })
    ));

  // it('should be created', inject([UserService], (service: UserService) => {
  //   expect(service).toBeTruthy();
  // }));
});
