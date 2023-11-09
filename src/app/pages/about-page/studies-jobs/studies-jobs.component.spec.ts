import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesJobsComponent } from './studies-jobs.component';

describe('StudiesJobsComponent', () => {
  let component: StudiesJobsComponent;
  let fixture: ComponentFixture<StudiesJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
