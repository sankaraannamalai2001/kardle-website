import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css'],
})
export class OurteamComponent implements OnInit {
  constructor() {}
  revealSec(entries: any, observer: any) {
    const entry = entries[0];
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
  }
  revObs = new IntersectionObserver(this.revealSec, {
    root: null,
    threshold: 0.15,
  });

  ngOnInit(): void {
    const allSections = document.querySelectorAll('.scroll-up');
    allSections.forEach((sec) => {
      this.revObs.observe(sec);
      sec.classList.add('hidden');
    });
  }
}
