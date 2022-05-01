import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {
    console.log('Storage Service injected');
  }

  async initialize() {
    await this.storage.create();
  }

  storeData(key: string, value: string | boolean | number) {
    try {
      this.storage.set(key, value);
    } catch (err) {
      alert('Error storing data: ' + err);
    }
  }

  async getStoredData(key: string) {
    try {
      return this.storage.get(key);
    } catch (err) {
      alert('Error getting stored data: ' + err);
      return null;
    }
  }
}
