import { trigger, transition, style, animate, query, stagger} from '@angular/animations';

export const listAnimation = trigger('listAnim', [
    transition('* => *', [                                                    // :enter 或 'void => *'
        query(':enter', style({opacity: 0}),{ optional: true }),
        query(':enter', stagger(100,[                                         // stagger 控制图片先后显示
            animate('1s', style({opacity: 1}))
        ]),{ optional: true }),
        query(':leave', style({opacity: 1}), { optional: true }),
        query(':leave', stagger(100,[
            animate('1s', style({opacity: 0}))
        ]), { optional: true })
    ]),
    
    
])