import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  // 导入 相同模块 或 公用组件
  exports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
