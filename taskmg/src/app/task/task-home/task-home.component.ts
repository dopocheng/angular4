import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})

export class TaskHomeComponent implements OnInit {
  dateTime: Date;
  lists: [
    {
      id: 1,
      name: '待办',
      tasks:[
        {
          id: 1,
          desc: '任务一: 去星巴克买咖啡',
          owner: {
              id: 1,
              name: '张三',
              avatar: 'avatars:svg-11',
          },
          dateTime: new Date(),
        },
      ]
    }
  ]

  constructor() { dateTime: Date;}

  ngOnInit() {
  }

}
