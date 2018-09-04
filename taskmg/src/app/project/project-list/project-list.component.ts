import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  // 测试
  projects = [
    {
      "name": "企业平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "企业平台",
      "desc": "这是一个企业内部项目",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ]
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

  launchEditerDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  openNewProjectDialog() {
    // dialog 大小 {width: '100px', height:'100px'} 位置 {position:{left: '0', top: '0'}} 
    // 需要得到令牌 （new-project） data {data: 'this is my data sent'}
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
    // 接受返回来的数据
    // dialogRef.afterClosed().subscribe(result => console.error(result));
  }

  launchDelDialog() {
   const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title: '删除任务',content: '你确认要删除么？'}});
    // dialogRef.afterClosed().subscribe(res => {console.log(res)})
  }

}
