import { trigger, state, transition, style, animate, keyframes, group} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
    state('void', style({'position' : 'fixed','width':'100%','height': '80%'})), // 鼠标不在卡片之内; borer-shadow 有横杠要加单引号否则不能作为 key
    state('*', style({'position' : 'fixed','width':'100%','height': '80%'})),
    transition(':enter', [                                                    // :enter 或 'void => *'
        style({transform: 'translateX(-100%)', opacity: 0}),                              
        // animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
        group([
            animate('.5s ease-in-out', style({transform: 'translateX(0)'})),
            animate('.3s ease-in', style({opacity: 1}))                  // 淡入淡出
        ])
    ]),
    transition(':leave', [                                                    // :leave 或  '* => viod'
        style({transform: 'translateX(0)', opacity: 1}),
        // animate('.5s ease-in-out', style({transform: 'translateX(100%)'}))
        group([
            animate('.5s ease-in-out', style({transform: 'translateX(100%)'})),
            animate('.3s ease-in', style({opacity: 0}))                  // 淡入淡出
        ])
    ]),
])