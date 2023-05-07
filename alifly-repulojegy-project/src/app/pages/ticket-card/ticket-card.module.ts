import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketCardRoutingModule } from './ticket-card-routing.module';
import { TicketCardComponent } from './ticket-card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    TicketCardComponent
  ],
  imports: [
    CommonModule,
    TicketCardRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule
  ]
})
export class TicketCardModule { }
