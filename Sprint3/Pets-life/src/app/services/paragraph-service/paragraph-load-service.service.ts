import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  private aboutUsUrl = '../assets/json/infoPage/aboutUs.json';

  constructor(private http: HttpClient) {}

  getAboutUsData(): Observable<any> {
    return this.http.get<any>(this.aboutUsUrl);
  }
}
