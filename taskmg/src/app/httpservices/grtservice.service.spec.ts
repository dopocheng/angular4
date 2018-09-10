import { TestBed, inject } from '@angular/core/testing';

import { GrtserviceService } from './grtservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Users } from '../domain';
import { async } from '@angular/core/testing';

describe('GrtserviceService', () => {
  let service: GrtserviceService;
  // let http: HttpClient;
  beforeEach(() => {
    // service = new GrtserviceService(http);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      // providers: [// 不能有providers冲突 http 未定义
      //   {
      //     //  provide: HttpClient,
      //     // deps: [GrtserviceService] 
      //   },
      // ]
    }).compileComponents();
  });
  it('登录', 
    async(inject(
      [GrtserviceService], (service: GrtserviceService) => {
        console.log("service", service);
        const mockLogin: Users = {
          mobile: '13851468237',
          password: '123123'
        };
        service.login(mockLogin).subscribe(res => {
          res = res;
          console.log(typeof(res));
          // let js = JSON.parse(res);
          // console.info("js", js);
          console.info("resD", res.uri);
          console.log("444", res.login.UserId);
          expect(res.login.Status).toEqual('OK');
        })
      })
    ));

    it('注册', 
    async(inject(
      [GrtserviceService], (service: GrtserviceService) => {
        console.log("service", service);
        const mockRegister: Users = {
          mobile: '13851468237',
          userNickName: 'dpc',
          password: '123123'
        };
        service.register(mockRegister).subscribe(res => {
          res = res;
          console.log(typeof(res));
          // let js = JSON.parse(res);
          // console.info("js", js);
          console.info("resD", res.uri);
          console.log("444", res.register.UserId);
          expect(res.register.Status).toEqual('OK');
        })
      })
    ));
  // it('should be created', inject([GrtserviceService], (service: GrtserviceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
