import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  
  studies = true;
  jobs = false;
  
  studiesShow() {
    this.studies = true;
    this.jobs = false;

  }

  jobsShow() {
    this.studies = false;
    this.jobs = true;
  }
}

