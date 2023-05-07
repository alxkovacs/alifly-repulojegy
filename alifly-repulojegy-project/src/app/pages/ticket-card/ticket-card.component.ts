import { Component, OnInit } from '@angular/core';
import { Flight } from '../../shared/models/Flight';
import { TicketCardService } from '../../shared/services/ticket-card.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { PurchaseService } from '../../shared/services/purchase.service';
import { Purchase } from '../../shared/models/Purchase';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

  cities: Array<Flight> = [];

  user?: User;

  loadedImage?: string;
  

  constructor(private router: Router, private ticketCardService: TicketCardService, private purchaseService: PurchaseService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.ticketCardService.getAll().subscribe((data: Array<Flight>) => {
      const loadImageObservables = data.map(val => {
        return this.ticketCardService.loadImage(val.photo_url);
      });
    
      const loadImageObservablesAirline = data.map(val => {
        return this.ticketCardService.loadImage(val.airline_url);
      });
    
      forkJoin([...loadImageObservables, ...loadImageObservablesAirline]).subscribe(imageDataArray => {
        const photoUrlDataArray = imageDataArray.slice(0, data.length);
        const airlinePictureUrlDataArray = imageDataArray.slice(data.length);
    
        for (let i = 0; i < data.length; i++) {
          data[i].photo_url = photoUrlDataArray[i];
          data[i].airline_url = airlinePictureUrlDataArray[i];
        }
    
        this.cities = data;
        console.log(this.cities);
      });
    });
  
}

  addPurchase(city: Flight) {
    const user =  JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    const purchase: Purchase = {
      id: this.firestore.createId(),
      userID: user.uid,
      name: city.name,
      photo_url: city.photo_url,
      airline_url: city.airline_url,
      date: city.date,
      airline: city.airline,
      price: Number(city.price)
    };
    this.router.navigateByUrl('/purchases');
    this.purchaseService.create(purchase).then(_ => {
      console.log('Purchase added successfully.');
    }).catch(error => {
      console.error(error);
    });
  }




}
