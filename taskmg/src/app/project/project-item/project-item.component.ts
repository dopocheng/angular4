import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite =new EventEmitter<void>();
  @Output() onEditer =new EventEmitter<void>();
  @Output() onDel =new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  onEditerClick() {
    this.onEditer.emit();
  }

  onDelClick() {
    this.onDel.emit();
  }

}
