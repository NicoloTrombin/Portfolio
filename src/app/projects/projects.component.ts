import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    slideIndex = 1;
    slideIndex1 = 1;
    slideIndex2 = 1;

    ngOnInit(): void {
      this.showSlides(this.slideIndex);
      this.showSlides1(this.slideIndex1);
      this.showSlides2(this.slideIndex2);
     }

     // Thumbnail image controls
     currentSlide(n : number) {
       this.showSlides(this.slideIndex = n);
     }

     currentSlide1(n1 : number) {
      this.showSlides1(this.slideIndex1 = n1);
    }

    currentSlide2(n2 : number) {
      this.showSlides2(this.slideIndex2 = n2);
    }

     showSlides(n : number) {
       let i;
       let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
       let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
       if (n > slides.length) {this.slideIndex = 1}
    
       if (n < 1) {this.slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
       }
       for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
       }
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";
     }

     showSlides1(n : number) {
      let i;
      let slides = document.getElementsByClassName("mySlides1") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot1") as HTMLCollectionOf<HTMLElement>;
      if (n > slides.length) {this.slideIndex1 = 1}
   
      if (n < 1) {this.slideIndex1 = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
       slides[this.slideIndex1-1].style.display = "block";
       dots[this.slideIndex1-1].className += " active";
    }

    showSlides2(n : number) {
      let i;
      let slides = document.getElementsByClassName("mySlides2") as HTMLCollectionOf<HTMLElement>;
      let dots = document.getElementsByClassName("dot2") as HTMLCollectionOf<HTMLElement>;
      if (n > slides.length) {this.slideIndex2 = 1}
   
      if (n < 1) {this.slideIndex2 = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
       slides[this.slideIndex2-1].style.display = "block";
       dots[this.slideIndex2-1].className += " active";
    }

}
