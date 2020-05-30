import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotProductResultsComponent } from './dot-product-results.component';

describe('DotProductResultsComponent', () => {
  let component: DotProductResultsComponent;
  let fixture: ComponentFixture<DotProductResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotProductResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotProductResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
