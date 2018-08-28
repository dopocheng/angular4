import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

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

  lauchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

  openNewProjectDialog() {
    // dialog 大小 {width: '100px', height:'100px'} 位置 {position:{left: '0', top: '0'}} 
    // 需要得到令牌 （new-project） data {data: 'this is my data sent'}
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}});
    // 接受返回来的数据
    dialogRef.afterClosed().subscribe(result => console.error(result));
  }

  

}
