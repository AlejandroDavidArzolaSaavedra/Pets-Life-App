import { Injectable, Injector } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { STORAGE_SERVICE } from '../storageProvider/storage.token'; 

@Injectable({
  providedIn: 'root'
})
export class StorageProviderService {
  private storageService: StorageService | undefined;

  constructor(private injector: Injector) {}

  getStorageService(): StorageService {
    if (!this.storageService) {
      this.storageService = this.injector.get(STORAGE_SERVICE);
    }
    return this.storageService;
  }
}
