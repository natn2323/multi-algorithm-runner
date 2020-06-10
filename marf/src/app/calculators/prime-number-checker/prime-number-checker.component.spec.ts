import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumberCheckerComponent } from './prime-number-checker.component';

describe('PrimeNumberCheckerComponent', () => {
  let component: PrimeNumberCheckerComponent;
  let fixture: ComponentFixture<PrimeNumberCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNumberCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNumberCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
