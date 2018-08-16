import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule
      } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  // 导入 相同模块 或 公用组件
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule { }
