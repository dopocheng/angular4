import { Component, OnInit, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,   // 在元数据的时候，自己还没有创建，注册不了自己,等待注册完成
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,   // 在元数据的时候，自己还没有创建，注册不了自己,等待注册完成
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {

  @Input() title = '请选择';
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() items: string[] = []
  @Input() useSvgIcon = false;
  @Input() itemWidth = '80px';

  selected: string;
  constructor() { }
  private propagateChange = (_: any) => {};

  onChange(i) {
    this.selected = this.items[i];
    this.propagateChange(this.selected)
  }

  // 写值
  writeValue(obj: any): void {
    this.selected = obj;
  };

  // view 值发生了变化发射给表单
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  };
  
  // 标记已经 touch 过了
  registerOnTouched(fn: any): void {

  };

  validate(c: FormControl): {[key: string]: any} {
    return this.selected? null: {
      imageListInvalid: {
        valid: false
      }
    };
  }
}
