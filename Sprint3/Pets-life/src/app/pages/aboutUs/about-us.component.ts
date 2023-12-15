import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AboutUsService } from 'src/app/services/paragraph-service/paragraph-load-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  aboutUsData: string[] = [];
  private aboutUsSubscription: Subscription | undefined;
  showAllParagraphs = false;

  constructor(private aboutUsService: AboutUsService) {}

  ngOnInit(): void {
    this.loadAboutUsData(this.showAllParagraphs);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.showAllParagraphs = window.innerWidth >= 750;
    this.loadAboutUsData(this.showAllParagraphs);
  }

  loadAboutUsData(showAllParagraphs: boolean) {
    this.aboutUsSubscription = this.aboutUsService.getAboutUsData().subscribe({
      next: (data) => {
        this.aboutUsData = showAllParagraphs ? data.aboutUs : data.aboutUs.slice(0, 2);
      },
      error: (error) => {
        console.error('Error loading or parsing the JSON file:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.aboutUsSubscription) {
      this.aboutUsSubscription.unsubscribe();
    }
  }
}
