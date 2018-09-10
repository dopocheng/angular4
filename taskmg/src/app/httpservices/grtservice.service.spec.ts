import { TestBed, inject } from '@angular/core/testing';

import { GrtserviceService } from './grtservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Login } from '../domain';

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

  // it('should be created', inject([GrtserviceService], (service: GrtserviceService) => {
  //   expect(service).toBeTruthy();
  // }));

  // it('created', inject([GrtserviceService], (service: GrtserviceService) => {
  //   console.log("service", service);
  //   expect(service.login()).toBeTruthy();
  // }));

  it('created', inject([GrtserviceService], (service: GrtserviceService) => {
    console.log("service", service);
    const mockLogin: Login = {
      mobile: '13851468237',
      password: '123123'
    };
    service.login(mockLogin).subscribe(res => {
      res = res;
      console.log(typeof(res));
      // let js = JSON.parse(res);
      // console.info("js", js);
      // console.info("resD", res.uri);
      // console.log("444", res.login.UserId);
      expect(res.uri).toEqual('O');
    })
    // console.log("666", service.User.UserId);
    // expect(service.User.UserId).toBeTruthy();
    // expect(service.login(mockLogin)).toBeTruthy();
  }));



  // it('慕课登录 observable',
  //   (done: DoneFn) => {
  //   service.login().subscribe(value => {
  //     expect(value).toBe('observable value');
  //     done();
  //   });
  // });

  // it('#慕课登录 should return real value',() => {
  //   console.log("service",service);
  //   expect(service.login()).toBeTruthy;
  // });

  // it('登录请求 promise',
  //   (done: DoneFn) => {
  //   service.login().then(value => {
  //     expect(value).toBe('promise value');
  //     done();
  //   });
  // });

  // it('should be created', inject([GrtserviceService], (service: GrtserviceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
