import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../../types';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.less']
})
export class MenuItemsComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { 
    this.menuItems = [];
  }

  ngOnInit(): void {
    const dotProductItem: MenuItem = {
      description: 'Dot Product',
      label: 'Find and learn more about dot products.',
      subItems: [
        { 
          description: 'Calculator', 
          label: 'Interactive dot product calculator.',
          linkToRouter: '/calculators/dotproduct' 
        },
        { // TODO: Create examples view
          description: 'Examples', 
          label: 'Several examples of dot products and the theory behind them.',
          linkToRouter: '' 
        }
      ]
    };

    const primeNumberItem: MenuItem = {
      description: 'Prime Numbers',
      label: 'Find and learn more about prime numbers.',
      subItems: [
        { 
          description: 'Calculator', 
          label: 'Interactive prime number calculator.',
          linkToRouter: '/calculators/primenumber' 
        },
        { // TODO: Create examples view
          description: 'Examples', 
          label: 'Several examples of prime numbers and different strategies for finding them.',
          linkToRouter: '' 
        } 
      ]
    };

    this.menuItems.push(dotProductItem, primeNumberItem);
  }

}
