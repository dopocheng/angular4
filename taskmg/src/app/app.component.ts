import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', 
      [
        state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateY(-100%)'})),// 改变样式
        state('red', style({'background-color': 'red', 'height': '50px', 'transform': 'translateY(100%)'})),
        // transition('green => red', animate(1000)),// 数字就是时间 animate 可以是字符串 （‘.2 1s’）1秒后执行
        // transition('red => green', animate(1000)),// 不同状态切换的时候，怎样去变换
        transition('green => red', animate('.8s ease-in')), // 缓动函数 in 开始的时候慢，结束的时候快；out 相反
        transition('red => green', animate(5000, keyframes([
          style({transform: 'translateY(100%)'}),
          style({transform: 'translateY(98%)'}),
          style({transform: 'translateY(95%)'}),
          style({transform: 'translateY(90%)'}),
          style({transform: 'translateY(80%)'}),
          style({transform: 'translateY(60%)'}),
          style({transform: 'translateY(30%)'}),
          style({transform: 'translateY(0%)'}),
          style({transform: 'translateY(-10%)'}),
          style({transform: 'translateY(-5%)'}),
          style({transform: 'translateY(-2%)'}),
          style({transform: 'translateY(0%)'}),
          style({transform: 'translateY(10%)'}),
          style({transform: 'translateY(15%)'}),
          style({transform: 'translateY(-15%)'}),
          style({transform: 'translateY(-40%)'}),
          style({transform: 'translateY(-80%)'}),
          style({transform: 'translateY(-90%)'}),
          style({transform: 'translateY(-95%)'}),
          style({transform: 'translateY(100%)'}),
        ]))),
      ]
    )
  ]
})
export class AppComponent {

  squareState : string;
  darkTheme = false;
  // dialog 和 mume 主题一直问题
  constructor(private oc: OverlayContainer) {

  }
  switchTheme(dark){
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add(dark ? 'myapp-dark-theme' : null);
  }

  onClick() {
    // this.squareState = this.squareState ? null : 'green';
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
