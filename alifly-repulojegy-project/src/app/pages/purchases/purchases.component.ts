import { Component, OnInit, Output } from '@angular/core';
import { Airline } from 'src/app/shared/models/Airline';
import { Purchase } from '../../shared/models/Purchase';
import { PurchaseService } from '../../shared/services/purchase.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  purchases: Array<Purchase> = [];

  priceyPurchase?: Array<Purchase> = [];



constructor(private purchaseService: PurchaseService) { }

ngOnInit(): void {
  /*
  this.purchaseService.getAll().subscribe((data: Array<Purchase>) => {
    this.purchases = data;
  });
  */
  const user =  JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
  this.purchaseService.getPurchasesByUserId(user.uid).subscribe((data: Array<Purchase>) => {
    console.log(data);
    this.purchases = data;
  });

  this.purchaseService.getPriceyPurchase(user.uid).subscribe((data: Array<Purchase>) => {
    console.log(data);
    this.priceyPurchase = data;
  });
}


deletePurchase(purchase: Purchase) {
    console.log("Delete purchase!");
    this.purchaseService.delete(purchase.id);
  }

}
