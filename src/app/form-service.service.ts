import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private formUrl = 'https://formspree.io/f/xdobavdp';
  constructor(private http: HttpClient) {}
  sendMail(user: object) {
    return this.http.post(this.formUrl, user, { responseType: 'text' });
  }
}
