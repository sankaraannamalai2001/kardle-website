import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any; 
declare var VANTA:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    VANTA.BIRDS({
      el: "#your-element-selector",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xffffff,
      color1: 0x9500ff,
      birdSize: 2.00,
      quantity: 2.00
    })

  }

   mailid() {
    navigator.clipboard.writeText("ceokardle@gmail.com");
  }
  phnno() {
    navigator.clipboard.writeText("9840153059");
  }

}
