import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSwitcherComponent } from './base-switcher.component';

describe('BaseSwitcherComponent', () => {
  let component: BaseSwitcherComponent;
  let fixture: ComponentFixture<BaseSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
