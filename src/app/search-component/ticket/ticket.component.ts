import { Component, OnInit, Input } from '@angular/core';
export interface ticket {
  AirportCode: "LAX",
  AirportName: "Pune",
  from: "Pune",
  to: "Delhi",
  Departure: "25 Jun 2021",
  Arrival: "26 Jun 2021",
  depTime: "1:05 AM",
  arrTime: "2:05 AM",
  price: 9000,
}
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  @Input() data: ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
