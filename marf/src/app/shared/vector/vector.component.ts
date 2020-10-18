import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vector',
  templateUrl: './vector.component.html',
  styleUrls: ['./vector.component.less']
})
export class VectorComponent implements OnInit {

  defaultNumberOfEntries: number = 5;
  entries: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.defaultNumberOfEntries; i++)
    {
      this.entries.push('');
    }
    
  }

}
