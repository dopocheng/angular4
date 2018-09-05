import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MatSidenavModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { DebugElement } from '@angular/core';

// 单元测试
describe('AppComponent', () => {
  // 每个测试用例之前都要运行 测试环境
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],

      imports: [
        MatSidenavModule,
        RouterModule.forRoot([]),
        CoreModule
      ],

      // 不是真实的运行环境，需要提供一个根路径
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
  }));
  
  // 从测试环境创建一个组件 AppComponent 然后得到 app 实例 ；这个实例应该是个对象
  it('应该创建应用', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // 去检查 DOM 元素包含哪些东西；创建组件然后监听变化；取得 nativeElement （渲染之后的 dom 节点元素）
  it('应该包含一个 .site 的元素', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const AppcomDe : DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = AppcomDe.nativeElement;
    const p = bannerEl.querySelector('.site');
    expect(p).toBeTruthy();
  }));
});
