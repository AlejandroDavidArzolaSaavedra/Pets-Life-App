import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHomePageService {

  constructor(private http: HttpClient) { }

  getHomePageData(): Observable<any> {
    return this.http.get<any>('../assets/json/infoPage/homePage/homePagePresentation.json');
  }

  getCarouselData(): Observable<any> {
    return this.http.get<any>('../assets/json/infoPage/homePage/carrouselData.json');
  }
}
