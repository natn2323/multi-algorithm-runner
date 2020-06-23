import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPrimesComponent } from './find-primes.component';

describe('FindPrimesComponent', () => {
  let component: FindPrimesComponent;
  let fixture: ComponentFixture<FindPrimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPrimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
