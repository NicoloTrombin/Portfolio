import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('hideNavbar', [
      state('visible', style({
        top: '0'
      })),
      state('hidden', style({
        top: '-300px'
      })),
      transition('visible => hidden', [
        animate('0.6s ease-out')
      ]),
      transition('hidden => visible', [
        animate('0.3s ease-out')
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit{

  selectedPath = 'home';
  checkboxValue: boolean = false;
  isNavbarHidden = false;
  lastScrollPosition = 0;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof RoutesRecognized))
      .subscribe((val: any) => {
        this.selectedPath = val.urlAfterRedirects.split('/')[1];;
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight

    if (scrollPosition > scrollThreshold) {
      this.isNavbarHidden = scrollPosition > this.lastScrollPosition;
      this.lastScrollPosition = scrollPosition;
    } else {
      this.isNavbarHidden = false;
    }
  }

  toggleCheckbox() {
    this.checkboxValue = !this.checkboxValue;
  }





  
}
