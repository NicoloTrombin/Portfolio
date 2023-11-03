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
    this.isStudies = !this.isStudies;
    this.isJobs = !this.isJobs;
  }

  isJobsSection() {
    this.isJobs = !this.isJobs;
    this.isStudies = !this.isStudies;
  }
}

