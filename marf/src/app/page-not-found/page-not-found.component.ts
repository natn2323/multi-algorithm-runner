import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.less']
})
export class PageNotFoundComponent implements OnInit {
  metaTitle: string = 'Page Not Found';
  metaDescription: string = 'The requested page was not found.';

  constructor(public router: Router, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.metaTitle);
    this.metaService.addTags([
      { name: 'description', content: this.metaDescription }
    ]);
  }

}
