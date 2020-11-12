// TODO: Make all input vectors resize when one is resized.

import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoResize]'
})
export class AutoResizeDirective implements OnInit {

  @Input('appAutoResize') inputValue: string;

  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = '24px'; // TODO: Make font sizes adjustable by zooming in

    this.inputValue = this.el.nativeElement.value;
    this.resizeInput(this.inputValue.length);
  }

  @HostListener('input') onInput() {
    this.inputValue = this.el.nativeElement.value;
    this.resizeInput(this.inputValue.length);
  }

  @HostListener('change') onInputChange() {
    this.resizeInput(this.inputValue.length);
  }

  private resizeInput(width: number) {
    this.el.nativeElement.style.width = (width + 1.5) + 'ch';
  }

}
