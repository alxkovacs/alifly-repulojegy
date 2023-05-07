import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketCardComponent } from './ticket-card.component';

const routes: Routes = [{ path: '', component: TicketCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketCardRoutingModule { }
