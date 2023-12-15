import { InjectionToken } from '@angular/core';
import { StorageService } from '../storage/storage.service';

export const STORAGE_SERVICE = new InjectionToken<StorageService>('STORAGE_SERVICE');
