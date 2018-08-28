import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskHomeComponent, TaskListComponent, TaskItemComponent, TaskHeaderComponent]
})
export class TaskModule { }
