import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInputCell } from '../../../../../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  @Input() table: any[][] = [];

  @Output() userInputValueEvent = new EventEmitter<UserInputCell>();

  inputValue: any;

  constructor() { }

  ngOnInit(): void { }
  
  onInputModelChange(event: InputEvent): void {
    this.inputValue = event;
  }

  onInputValueChange(rowIndex: number, colIndex: number, event: Event): void {
    // Emit data from this child component to the parent component
    this.userInputValueEvent.emit({i: rowIndex, j: colIndex, value: this.inputValue});
  }

}
