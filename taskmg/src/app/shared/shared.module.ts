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
        MatGridListModule,
        MatDialogModule,
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
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule
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
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
  ],
  declarations: []
})
export class SharedModule { }
