import { TestBed, inject } from '@angular/core/testing';
// import { AuthService } from './auth/service';
import { BaseResponseOptions, Http, HttpModule, Response, ResponseOptions  } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe( '用户注册服务', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: 'BASE_CONFIG', userValue: {
                        uri: 'http://localhost:4200'
                    }
                },
                {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [
                        MockBackend, 
                        BaseResponseOptions
                    ]
                },
                MockBackend,
                BaseResponseOptions
                // AuthService
            ] 
        });
    });

    it('注册后应该返回一个 Observable<Auth>', inject(['AuthService', MockBackend], (service: 'AuthService', mockBackend: MockBackend) => {
        const mockUser: User = {
            name: '',
            password: '',
            email: '',
        };
        const mockResponse = {
            id: '',
            email: '',
            password: '',
        };
        mockBackend.connections.subscribe(conn =>{
            conn.mockResponse(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })));
        });
        service.register(mockUser).subscribe(auth => {
          expect(auth.token).toBeDefined();  
          expect(auth.user).toBeDefined();  
        });
        expect(service).toBeTruthy();
    }));
});