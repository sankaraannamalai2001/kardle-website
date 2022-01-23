import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  revealSec(entries: any, observer: any) {
    const entry = entries[0];
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
  }
  revObs = new IntersectionObserver(this.revealSec, {
    root: null,
    threshold: 0.15,
  });

  ngOnInit(): void {
    const scrollbtn = document.querySelector('.img-btn');
    const section1 = <HTMLBodyElement>document.querySelector('.section-3');
    scrollbtn?.addEventListener('click', (e) => {
      const secCoords = section1.getBoundingClientRect();

      window.scrollTo({
        top: secCoords.top + window.pageYOffset - 150,
        left: secCoords.left + window.pageXOffset,
        behavior: 'smooth',
      });
      console.log(secCoords);
      // section1?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
    });
    const allSections = document.querySelectorAll('.section');
    allSections.forEach((sec) => {
      this.revObs.observe(sec);
      sec.classList.add('hidden');
    });
  }
}
