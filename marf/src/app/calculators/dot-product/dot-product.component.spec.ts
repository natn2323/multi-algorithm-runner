import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotProductComponent } from './dot-product.component';

describe('DotProductComponent', () => {
  let component: DotProductComponent;
  let fixture: ComponentFixture<DotProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
