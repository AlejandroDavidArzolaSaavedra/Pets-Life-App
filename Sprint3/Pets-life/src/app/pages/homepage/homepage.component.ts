import { Component, OnInit } from '@angular/core';
import { DataHomePageService } from '../../services/homepage/data-home-page.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  mainTitle: string = '';
  secondaryTitle: string = '';
  description: string = '';
  carouselItems: any[] = [];
  isHovered: boolean = false;

  constructor(private dataService: DataHomePageService) {}

  ngOnInit(): void {
    this.dataService.getHomePageData().subscribe(data => {
      this.mainTitle = data.homePageStructure.mainTitle;
      this.secondaryTitle = data.homePageStructure.secondaryTitle;
      this.description = data.homePageStructure.description;
    });

    this.dataService.getCarouselData().subscribe(data => {
      this.carouselItems = data.carousel;
    });
  }
}
