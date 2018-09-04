import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title = '';
  // 1.获得调用者传递过来的参数 data 数据 MAT_DIALOG_DATA
  // 2.将数据传给调用者 MatDialogRef
  constructor(
              @Inject(MAT_DIALOG_DATA) private data, 
              private dialogRef: MatDialogRef<NewProjectComponent>,
            ) {

            }
  ngOnInit() {
    this.title = this.data.title;
    // console.error(JSON.stringify(this.data));
    // console.error(this.data);
    // 主题颜色全局设置 app.component (dialog mune)
    // this.oc.getContainerElement().classList.add(this.data.dark ? 'myapp-dark-theme' : null); 
  }

  onClick() {
    // 关闭时候返回数据
    this.dialogRef.close("I receive your message")
  }


}
