import { Component, OnInit } from '@angular/core';
import { BasicPipe } from 'src/shared-services/basic-pipe.pipe';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  expo: number;
  constructor() { }

  ngOnInit(): void {
  }

  response: HighlightResult;

  code = `
  @Pipe({ name: 'exponentialStrength' })
  export class BasicPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }}}
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
