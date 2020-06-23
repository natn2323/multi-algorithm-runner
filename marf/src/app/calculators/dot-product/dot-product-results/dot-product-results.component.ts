import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dot-product-results',
  templateUrl: './dot-product-results.component.html',
  styleUrls: ['./dot-product-results.component.less']
})
export class DotProductResultsComponent implements OnInit, OnChanges {
  @Input() result: string;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

}
