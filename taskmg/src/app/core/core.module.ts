import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
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
  constructor( @Optional() @SkipSelf() parent: CoreModule ) {
    if ( parent ) {

      throw new Error('模块已经存在！');
    }
  }
 }
