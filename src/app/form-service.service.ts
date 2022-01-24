import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private formUrl = 'https://mailthis.to/sankarannamalai01@gmail.com';
  constructor(private http: HttpClient) {}
  sendMail(user: object) {
    return this.http.post(this.formUrl, user, { responseType: 'text' });
  }
}
