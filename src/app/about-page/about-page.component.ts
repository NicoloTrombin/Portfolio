import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit{
  
  ngOnInit(): void {
    Aos.init({
      offset: 400,
      duration: 1000
    });
  }

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

