import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectRoutingmodule } from './project-routing.moudle';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingmodule,
  ],
  declarations: [
    ProjectListComponent, 
    ProjectItemComponent, 
    NewProjectComponent, 
    InviteComponent,
  ],
  entryComponents: [
    ProjectItemComponent,
    InviteComponent,
    NewProjectComponent
  ]
})
export class ProjectModule { }
