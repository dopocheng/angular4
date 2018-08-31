import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
// import { MatTooltipModule } from '@angular/material/tooltip';
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
        MatAutocompleteModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatRadioModule,
        MatNativeDateModule,
        MatSelectModule,
      } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

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
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
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
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent]
})
export class SharedModule { }
