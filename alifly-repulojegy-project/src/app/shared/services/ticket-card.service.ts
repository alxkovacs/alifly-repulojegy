import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Flight } from '../models/Flight';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class TicketCardService {

  collectionName = 'Flights';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  getAll() {
    return this.afs.collection<Flight>(this.collectionName).valueChanges();
  }

  loadImage(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }

}
