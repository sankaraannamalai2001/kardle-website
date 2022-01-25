import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any; 
declare var VANTA:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit,AfterViewInit {

  map:any;
  marker:any;
  @ViewChild('mapElement') mapElement:any;
  center: any={ lat: 13.050522213412172, lng:  80.0262496821277};

  constructor() { }
  ngAfterViewInit(): void {
    /*this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center:this.center ,
      zoom: 18,
    });
    this.marker = new google.maps.Marker({position:this.center, map:this.map})*/
  }

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
