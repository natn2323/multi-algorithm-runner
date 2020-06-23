import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { TooltipPosition, MatTooltip } from '@angular/material/tooltip';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-aria-error-icon',
  animations: [
    trigger('displayIcon', [
      state('activated', style({
        // transform: 'translateX(30px) rotate(90deg)'
        // display: 'none'
      })),
      state('*', style({
        // display: 'hidden'
      })),
      transition('activated => *', [
        animate('0.5s')
      ]),
      transition('* => activated', [
        animate('0.5s')
      ])
    ])
  ],
  templateUrl: './aria-error-icon.component.html',
  styleUrls: ['./aria-error-icon.component.less']
})
export class AriaErrorIconComponent implements OnInit, OnChanges {
  @ViewChild('tooltip') tooltip: MatTooltip;

  @Input() tooltipMessage: string;
  @Input() tooltipPosition: TooltipPosition;
  @Input() ariaLabel: string;
  @Input() isShowing: boolean;
  @Input() iconName: string;
  @Input() shouldAnimate: boolean;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isShowing && 
        changes.isShowing.previousValue &&
        !changes.isShowing.firstChange) {
      this.tooltip.show();
    }
  }
}
