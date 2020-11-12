import { Component, ElementRef, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { VectorComponent } from '../vector/vector.component';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.less']
})
export class UserInputComponent implements OnInit {

  @Input() inputType: string;
  @Input() numberOfInputs: number;

  @ViewChild('appInput') appInput: VectorComponent;

  // @Input('app-vector') appInputElem: ElementRef[];

  constructor() { }

  ngOnInit(): void { }

  onKeydown(event: KeyboardEvent, index: number): void {
    // if (event.code === 'ArrowDown') {
    //   const lastInputIndex = this.numberOfInputs - 1;
    //   if (index === lastInputIndex) {
    //     this.appInputElem[0].nativeElement.focus();
    //   }
    //   else {
    //     this.appInputElem[index].nativeElement.focus();
    //   }
    // }
    // else if (event.code === 'ArrowUp') {
    //   if (index === 0) {
    //     this.appInputElem[this.appInputElem.length - 1].nativeElement.focus();
    //   }
    //   else {
    //     this.appInputElem[index].nativeElement.focus();
    //   }
    // }
  }

}
