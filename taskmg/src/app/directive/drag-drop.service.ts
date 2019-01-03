import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DragData {
  tag: string;                              // 是 item 拖拽还是 整个 list 拖拽
  data: any;
}

@Injectable()
export class DragDropService {
  private _dragData =new BehaviorSubject<DragData>(null);       // 记住上一次的值

  setDragData(data: DragData) {               // 存储
    this._dragData.next(data);
  }                                           
  getData(): Observable<DragData> {           // 获取
    return this._dragData.asObservable();
  }
  clearDragData(){                            // 清空 
    this._dragData.next(null);
  }
 
}
