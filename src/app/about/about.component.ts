import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}
  revealSec(entries: any, observer: any) {
    const entry = entries[0];
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('hidden-left');
    entry.target.classList.remove('hidden-right');
    entry.target.classList.remove('hidden-top');
    observer.unobserve(entry.target);
  }
  revObs = new IntersectionObserver(this.revealSec, {
    root: null,
    threshold: 0.15,
  });
  revObs1 = new IntersectionObserver(this.revealSec, {
    root: null,
    threshold: 0.15,
  });
  revObs2 = new IntersectionObserver(this.revealSec, {
    root: null,
    threshold: 0.15,
  });
  ngOnInit(): void {
    const allSections1 = document.querySelectorAll('.left');
    const allSections2 = document.querySelectorAll('.right');
    const allSections3 = document.querySelectorAll('.top');
    allSections2.forEach((sec) => {
      this.revObs.observe(sec);
      sec.classList.add('hidden-right');
    });
    allSections1.forEach((sec) => {
      this.revObs1.observe(sec);
      sec.classList.add('hidden-left');
    });
    allSections3.forEach((sec) => {
      this.revObs2.observe(sec);
      sec.classList.add('hidden-top');
    });
  }
}
