import { Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { itemAnim } from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'in';
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemlick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    // 阻止冒泡
    ev.stopPropagation();
  }

  @HostListener('mouseenter')
  onmouseenter(){
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseleave(){
    this.widerPriority = 'in';
  }

}
