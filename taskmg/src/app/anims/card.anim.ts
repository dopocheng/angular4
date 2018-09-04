import { trigger, state, transition, style, animate, keyframes} from '@angular/animations';

export const cardAnim = trigger('card', [
    state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})), // 鼠标不在卡片之内; borer-shadow 有横杠要加单引号否则不能作为 key
    state('hover', style({transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px 6px #ccc'})),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out'))
])