import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  constructor(private formService: FormServiceService) {}
  CareerFormData: any = {};
  ngOnInit(): void {}
  msg = '';
  errmsg = '';
  submitForm() {
    // console.log(this.CareerFormData);
    this.formService.sendMail(this.CareerFormData).subscribe(
      (res) => {
        if (res.indexOf('thanks') !== -1)
          this.msg =
            'Thank you for choosing us. Our employee will be in touch with you shortly';
      },
      (err) => {
        console.log(err);
        this.errmsg =
          'Something went wrong. Try contacting us with email or telephone';
      }
    );
  }
}
