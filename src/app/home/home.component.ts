import { Component, ElementRef,QueryList, OnInit, ViewChildren } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  window: any;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  currentCount1: number = 0;
  currentCount2: number = 0;
  currentCount3: number = 0;

  targetCount1: number = 20;
  targetCount2: number = 300;
  targetCount3: number = 10000;

  constructor() { }

  ngOnInit(): void {
    this.startCounter();
  }

  startCounter(): void {
    const speed1 = 20; 
    const speed2 = 3; 
    const speed3 = 1; 
    

    const interval1 = setInterval(() => {
      if (this.currentCount1 < this.targetCount1) {
        this.currentCount1++;
      } else {
        clearInterval(interval1);
      }
    }, speed1);

    const interval2 = setInterval(() => {
      if (this.currentCount2 < this.targetCount2) {
        this.currentCount2++;
      } else {
        clearInterval(interval2);
      }
    }, speed2);

    const interval3 = setInterval(() => {
      if (this.currentCount3 < this.targetCount3) {
        this.currentCount3=this.currentCount3+50;
      } else {
        clearInterval(interval3);
      }
    }, speed3);
  }

}