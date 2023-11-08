import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

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

