import { TestBed } from '@angular/core/testing';

import { TicketCardService } from './ticket-card.service';

describe('TicketCardService', () => {
  let service: TicketCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
