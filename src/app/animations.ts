import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  state,
  transition,
  trigger
} from "@angular/animations";

export const listAnimation = trigger("listAnimation", [
  transition('* => *', [
    query('span', style({ transform: 'translateX(-100%)' })),
    query('span',
      stagger('10ms', [
        animate('100ms', style({ transform: 'translateX(-600px)' })),
        animate('100ms', style({ transform: 'translateY(-600px)' }))
      ]))
  ])
]);

export const actionAnimation = trigger("actionAnimation", [
  state(
    "orig",
    style({
      transform: "scale(1)",
      opacity: 1
    })
  ),
  state(
    "small",
    style({
      transform: "scale(0.75)",
      opacity: 0.3
    })
  ),
  transition('* => *', [
    query('span', style({ transform: 'translateX(-100%)' })),
    query('span',
      stagger('600ms', [
        animate('900ms', style({ transform: 'translateX(-660px)' })),
        animate('900ms', style({ transform: 'translateY(-660px)' }))
      ]))
  ])
]);
