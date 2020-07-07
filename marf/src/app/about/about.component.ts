import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  metaTitle: string = 'About the Multi-Algorithm Runner';
  metaDescription: string = 'Read about the contributors to the Multi-Algorithm Runner service.';

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      { name: 'description', content: this.metaDescription }
    ]);
  }

}
