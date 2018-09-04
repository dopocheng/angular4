import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
import { cardAnim } from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite =new EventEmitter<void>();
  @Output() onEditer =new EventEmitter<void>();
  @Output() onDel =new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  constructor() { }

  ngOnInit() {
  }

  // @HostListener('mouseenter', ['$event.target']) 
  @HostListener('mouseenter')
  onmouseenter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
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
