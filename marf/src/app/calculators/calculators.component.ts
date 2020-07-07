import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.less']
})
export class CalculatorsComponent implements OnInit {
  // Note: this title and description won't be seen if the URL redirects to the 'first' calculator
  metaTitle: string = 'Calculators of the Multi-Algorithm Runner'; 
  metaDescription: string = 'View the calculators provided by the Multi-Algorithm Runner service.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void { 
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      { name: 'description', content: this.metaDescription }
    ]);
  }

}
