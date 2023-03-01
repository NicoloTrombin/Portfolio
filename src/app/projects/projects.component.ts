import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  //  slideIndex = 1;

  //   constructor(@Inject(DOCUMENT) private document: Document) {}

  //  ngOnInit(): void {
  //    this.showSlides(this.slideIndex);
  //   }

  //   // Next/previous controls
  //  plusSlides(n : number) {
  //     this.showSlides(this.slideIndex += n);
  //   }

  //   // Thumbnail image controls
  //   currentSlide(n : number) {
  //     this.showSlides(this.slideIndex = n);
  //   }

  //   showSlides(n : number) {
  //     let i;
  //     let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  //     let dots = document.getElementsByClassName("dot");
  //     if (n > slides.length) {this.slideIndex = 1}
    
  //     if (n < 1) {this.slideIndex = slides.length}
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //     }
  //      slides[this.slideIndex-1].style.display = "block";
  //     dots[this.slideIndex-1].className += " active";
  //   }

     slideIndex = 0;
     slideIndex1 = 0;
     slideIndex2 = 0;
     slideIndex3 = [1, 1, 1];

     ngOnInit() : void {
      this.showSlides();  
      this.showSlides1();
      this.showSlides2();
    }

    showSlides() {
     let i;
     let slides : any  = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }

     this.slideIndex++;
    
     if (this.slideIndex > slides.length) {this.slideIndex = 1}
    
     slides[this.slideIndex-1].style.display = "block";
     setTimeout(() => this.showSlides(), 4000);
   }

   showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides1") as HTMLCollectionOf<HTMLElement>;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    this.slideIndex1++;
   
    if (this.slideIndex1 > slides.length) {this.slideIndex1 = 1}
   
    slides[this.slideIndex1-1].style.display = "block";
    setTimeout(() => this.showSlides1(), 4000);
  }

  showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2") as HTMLCollectionOf<HTMLElement>;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    this.slideIndex2++;
   
    if (this.slideIndex2 > slides.length) {this.slideIndex2 = 1}
   
    slides[this.slideIndex2-1].style.display = "block";
    setTimeout(() => this.showSlides2(), 4000);
  }
}
