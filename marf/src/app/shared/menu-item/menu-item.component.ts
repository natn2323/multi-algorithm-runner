import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '../../../../../types'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {
  
  @ViewChild('focusableItem') focusableItem: ElementRef;
  
  @Input() linkDescription: string;
  @Input() linkLabel: string;
  @Input() linkToRouter: string;
  @Input() item: MenuItem;
  @Input() subItems: MenuItem[];

  // TODO: Working on this part, to designate what menu-items are subitems and which are not.
  // The benefit of having this is that it's more general. Currently, we're marking all subItems as
  // subItems... which is wrong...? The distinction should be akin to nodes and leaves.
  @Input() isSubItem: boolean; 
  
  isExpanded: boolean;

  constructor() {
    this.isExpanded = false;

    this.item = {
      description: null,
      label: null,
      linkToRouter: null
    };
  }

  ngOnInit(): void {
    this.item.description = this.linkDescription;
    this.item.label = this.linkLabel;
    this.item.linkToRouter = this.linkToRouter;
  }

  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    
    if (this.subItems && this.subItems.length > 0) {
      this.isExpanded = !this.isExpanded;
    }

    this.focusableItem.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.subItems && this.subItems.length > 0) {
      if (event.code === 'Space' || event.code === 'Enter') {
        this.isExpanded = !this.isExpanded;
      }
    }
  }

}
