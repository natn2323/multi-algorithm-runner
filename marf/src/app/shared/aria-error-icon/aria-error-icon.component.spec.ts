import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaErrorIconComponent } from './aria-error-icon.component';

describe('AriaErrorIconComponent', () => {
  let component: AriaErrorIconComponent;
  let fixture: ComponentFixture<AriaErrorIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriaErrorIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriaErrorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
