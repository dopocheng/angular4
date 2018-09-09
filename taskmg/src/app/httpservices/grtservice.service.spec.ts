import { TestBed, inject } from '@angular/core/testing';

import { GrtserviceService } from './grtservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

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
    service.login().subscribe(res => {
      console.info(res);
    })
    expect(service.login()).toBeTruthy();
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
