import { Component } from '@angular/core';

@Component({
  selector: 'app-studies-jobs',
  templateUrl: './studies-jobs.component.html',
  styleUrls: ['./studies-jobs.component.css', '../about-page.component.css']
})
export class StudiesJobsComponent {

  isStudies = true;
  isJobs = false;

  isStudiesSection() {
    this.isStudies = true
    this.isJobs = false;
  }

  isJobsSection() {
    this.isJobs = true
    this.isStudies = false;
  }
}
