import { Component, OnInit, Injectable } from '@angular/core';
import { BasicDirective } from 'src/shared-services/basic.directive';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  response: HighlightResult;

  code = `
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
  `

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }
}
