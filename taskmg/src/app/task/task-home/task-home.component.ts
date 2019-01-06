import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight]
})

export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  title: string ='';
  
  lists = [// lists 后不能 ':' 号，否则没数据也不报错！！！ 
    {
      id: 1,
      name: '待办',
      order: 1,
      tasks:[
        {
          id: 1,
          desc: '任务一: 去星巴克买咖啡',
          completed: true, 
          priority: 3,       
          owner: {
              id: 1,
              name: '张三',
              avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二: 完成老板布置的 ppt 作业',
          completed: false,
          priority: 2, 
          owner: {
              id: 1,
              name: '李四',
              avatar: 'avatars:svg-12',
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      order: 2,
      tasks:[
        {
          id: 1,
          desc: '任务三: 项目代码评审',
          completed: false,
          priority: 1, 
          owner: {
              id: 1,
              name: '王五',
              avatar: 'avatars:svg-13',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四: 指定项目计划',
          completed: false,
          priority: 2, 
          owner: {
              id: 1,
              name: '李四',
              avatar: 'avatars:svg-12',
          },
          dueDate: new Date(),
        }
      ]
    }
  ]

  constructor( private dialog: MatDialog) { }

  ngOnInit() {
    
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent);
  }

  launchNewTaskDialog() {
    // this.dialog.open(NewTaskComponent);
    const dialogRef = this.dialog.open(NewTaskComponent,{data: {title: '新建任务: '}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent,{data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent,{data: {title: '修改任务: ', task: task}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data: {title: '删除列表', content: '你确认删除该列表么？'}});
    dialogRef.afterClosed().subscribe(res => {console.error(res)})
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent,{data: {title: '更改列表名称'}});
    // dialogRef.afterClosed().subscribe(res => {console.error(res)})
  }

  launchNewLisDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent,{data: {title: '新建列表'}});
    // dialogRef.afterClosed().subscribe(res => {console.error(res)})
  }
  handleMove(srcData, list) {
    console.log('handle');
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling in');
        break;
      case 'task-list':
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        console.log('handling list');
        break;
      default:
        break;
    }
  }
}
