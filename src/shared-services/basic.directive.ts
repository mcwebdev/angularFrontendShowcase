//* See https://angular.io/guide/attribute-directives *//
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class BasicDirective {
  constructor(private el: ElementRef) {

    this.el.nativeElement.style.backgroundColor = "yellow";

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
