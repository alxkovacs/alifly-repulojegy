import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Purchase } from '../models/Purchase';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  collectionName = 'Purchases';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  loadImage(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }

  create(purchase: Purchase) {
    return this.afs.collection<Purchase>(this.collectionName).doc(purchase.id).set(purchase);
  }

  getAll() {
    return this.afs.collection<Purchase>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Purchase>(this.collectionName).doc(id).valueChanges();
  }

  update(purchase: Purchase) {
    return this.afs.collection<Purchase>(this.collectionName).doc(purchase.id).set(purchase);
  }

  delete(id: string) {
    return this.afs.collection<Purchase>(this.collectionName).doc(id).delete();
  }

  getPurchasesByUserId(userId: string) {
    //console.log(userId);
    return this.afs.collection<Purchase>(this.collectionName, ref => ref.where('userID', '==', userId).orderBy('price', 'desc')).valueChanges();
  }

  getPriceyPurchase(userId: string) {
    //console.log(userId);
    return this.afs.collection<Purchase>(this.collectionName, ref => ref.where('userID', '==', userId).orderBy('price', 'desc').limit(1)).valueChanges();
  }

}
