import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  private _isDraggble = false;

  @Input('app-draggable')       // app-draggable = true 就会调用 isDraggable(val); val = true
  set isDraggable(val: boolean) {
    this._isDraggble = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);   // html 规定拖拽 draggable = true/false
  }

  get isDraggable() {
    return this._isDraggble;
  }

  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: any;
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
    ) { }

  @HostListener('dragstart', ['$event'])
  onDragstart(ev: Event){
    if(this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData})
    }
  }

  @HostListener('dragend', ['$event'])
  onDragend(ev: Event){
    if(this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
