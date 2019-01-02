import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[app-draggable][draggedClass]'
})
export class DragDirective {
  _isDraggble = false;

  @Input('app-draggable') 
  set Draggable(val: boolean) {
    this._isDraggble = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }

  get Draggable() {
    return this._isDraggble;
  }
  @Input() draggedClass: string;

  constructor(
    private el: ElementRef,
    private rd: Renderer2
    ) { }

  @HostListener('dragstart', ['$event'])
  onDragstart(ev: Event){
    if(this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }
  }

  @HostListener('dragend', ['$event'])
  ondragend(ev: Event){
    if(this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }
  }

}
