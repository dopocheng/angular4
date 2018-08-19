import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
      } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule
  ],
  // 导入 相同模块 或 公用组件
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
