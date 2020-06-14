import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.less']
})
export class CalculatorsComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) { }

  ngOnInit(): void { }

}
