import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserInputCell } from '../../../../../types';

@Component({
  selector: 'app-vector',
  templateUrl: './vector.component.html',
  styleUrls: ['./vector.component.less']
})
export class VectorComponent implements OnInit, OnChanges {

  table: any[][] = [];

  constructor() { }

  ngOnInit(): void {
    const defaultNumberOfEntries = 25;

    for (let i = 0; i < 1; i++) {
      this.table[i] = [];
      
      for (let j = 0; j < defaultNumberOfEntries; j++) {
        this.table[i][j] = {'value': ''};
      }
    }
  }

  // TODO: Remove
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // TODO: Remove
  onClick(event): void {
    console.log(event);
    console.log(this.table);
  }

  onVectorChanges(event: UserInputCell): void {
    // Since the table child component intercepts the 'change' event,
    // we want to ensure that the value needs to be changed
    if (this.table[event.i][event.j].value !== event.value) {
      this.table[event.i][event.j] = {'value': event.value};
    }
  }

  // TODO: Move to vectors.component.ts
  clear(): void {
    let tableRowNum = this.table.length;
    for (let i = 0; i < tableRowNum; i++) {
      for (let j = 0; j < this.table[i].length; j++) {
        this.table[i][j] = {'value': '0'};
      }
    }
  }

  // TODO: Add 'submit()' to vectors.component.ts

  // TODO: Have vectors.component.ts keep track of vector components, so we can focus them individually with
  // 1. focusNext()
  // 2. focusPrev()

}
