import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  services: any[] = [];
  private serviceSubscription: Subscription | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.serviceSubscription = this.dataService.getServices().subscribe({
      next: (data) => {
        this.services = data.services;
      },
      error: (error) => {
        console.error('Error loading or parsing the JSON file:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
  }
}
