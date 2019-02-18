import { Component, OnInit, HostListener, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {

  @Output() quickTask = new EventEmitter();
  desc: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();// 点 submit 误操作不刷新表单
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
  }

  @HostListener('keyup.enter')
  sendQuickTask(){
    // desc 为空，或长度为空，或多个空格  
    if(!this.desc || this.desc.length === 0 || !this.desc.trim()) {
      return;
    }
    this.quickTask.emit(this.desc);
    this.desc = '';
  }

}
