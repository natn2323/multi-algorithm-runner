import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotProductFormComponent } from './dot-product-form.component';

describe('DotProductFormComponent', () => {
  let component: DotProductFormComponent;
  let fixture: ComponentFixture<DotProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
