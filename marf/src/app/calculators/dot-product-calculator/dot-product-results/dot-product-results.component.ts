import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dot-product-results',
  templateUrl: './dot-product-results.component.html',
  styleUrls: ['./dot-product-results.component.less']
})
export class DotProductResultsComponent implements OnInit {
  @Input() result: string;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void { }

}
