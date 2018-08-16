import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
// 导入 httpModule 报错
import { HttpClientModule  } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  // 可能会反复寻找 coreModule ，引入 SkipSelf 注解让去系统父集寻找
  // 第一次没有 coreModule ，Optional（）如果不存在正常构造，如果有就发现有这个模块
  constructor(
    @Optional() @SkipSelf()parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if ( parent ) {

      throw new Error('模块已经存在！');
    }
    loadSvgResources(ir, ds);
  }
 }
