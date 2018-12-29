import { Component, ReflectiveInjector, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate, keyframes} from '@angular/animations';
import { Identifiers, identifierModuleUrl } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { addToViewTree } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('square',     // 测试代码
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
    const injector = ReflectiveInjector.resolveAndCreate([        // 根据输入的数组去构建一个池子
      {provide: Person, useClass: Person},                        // Person 是令牌一个标识去池子里找; 或写成 Person
      {provide: Address, useFactory:() => {
        if(environment.production) {
            return new Address('北京', '北京', '上京区', '北京街道')
          }else{
            return new Address('江苏', '南京', '江宁区', '秣陵街道')
          }
        }
      },
      {
        provide: Id, useFactory:() => {
          return Id.getInstance('idCard');
        }
      },
    ]);
    const childInjector = injector.resolveAndCreateChild([Person]);       // 子的池子里没有 Id Address 就去父的池子里去找
    const person = injector.get(Person);
    const personFromChild = childInjector.get(Person);
    console.log(JSON.stringify(person));
    console.log(JSON.stringify(personFromChild));
    console.log(person === personFromChild);
  }
  switchTheme(dark){
    this.darkTheme = dark;
    this.oc.getContainerElement().classList.add(dark ? 'myapp-dark-theme' : null);
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
// 测试依赖注入的代码
class Id {
  static getInstance(type: string): Id {       // 工厂类的方法，返回一个 id 类型
    return new Id();
  }
}

class Address {
  province: string;
  city: string;
  district: string;
  street: string;
  constructor(province, city, district, street) { 
    this.province = province;
    this.city = city;
    this.district = district;
    this.street = street
  }
}
class Person {          // 需要两个依赖
  id: Id;
  address: Address;
  
  constructor(@Inject(Id) id, @Inject(Address) address) {       
    this.id = id;
    this.address = address;
  }
}


// class Person {          // 需要两个依赖
//   id: Id;
//   address: Address;
  
//   constructor(id: Id, address: Address) {       // 2.推到上一级构造
//     this.id = id;
//     this.address = address;
//   }
 
  // constructor() {       // 1.重度依赖；不利于重构
  //   console.log();
  //   this.id = Id.getInstance('idCard');
  //   this.address = new Address('北京', '北京', '上京区', '北京街道');
  // }
// }

// main () {       // 法 2 此处构造 （不合法）只是说明机制.入口函数；多了也不好维护
//   const id = Id.getInstance('idCard');
//   const address = new Address('北京', '北京', '上京区', '北京街道');
//   const person = new Person(id, address)
// }
