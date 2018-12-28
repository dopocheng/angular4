import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('square',
    [
      state('green', style({'background-color': 'green', 'height': '100px', 'transform': 'translateY(-100%)'})),   // 相当于帧
      state('red', style({'background-color': 'red', 'height': '50px', 'transform': 'translateY(100%)'})),
      transition('green => red', animate('1s ease-in')),             // 过渡动画 ease-in 开始的时候慢结束的时候快
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
      ])))
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
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
