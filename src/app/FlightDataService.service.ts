import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  flights=[
    {
      AirportCode:"LAX-0",
      AirportName:"Pune",
      from:"Pune",
      to:"Delhi",
      Departure:"25 Sep 2021",
      Arrival:"26 Sep 2021",
      depTime:"1:05 AM",
      arrTime:"2:05 AM",
      price:9000,
      return:"28 Sep 2021",
    },
    {
      AirportCode:"LAX-011",
      AirportName:"Pune",
      from:"Pune",
      to:"Delhi",
      Departure:"25 Sep 2021",
      Arrival:"26 Sep 2021",
      depTime:"2:05 AM",
      arrTime:"5:05 AM",
      price:9000,
      return:"28 Sep 2021",
    },
    {
      AirportCode:"LAX-1",
      AirportName:"Pune",
      from:"Banglore",
      to:"Delhi",
      Departure:"27 Sep 2021",
      Arrival:"28 Sep 2021",
      depTime:"1:05 AM",
      arrTime:"2:05 AM",
      return:"29 Sep 2021",
      price:10000,
    },
    {
      AirportCode:"LAX-2",
      AirportName:"Pune",
      from:"Gujrat",
      to:"Delhi",
      Departure:"27 Sep 2021",
      Arrival:"28 Sep 2021",
      depTime:"1:05 AM",
      arrTime:"2:05 AM",
      return:"30 Sep 2021",
      price:11000,

    },
    {
      AirportCode:"LAX-3",
      AirportName:"Pune",
      from:"Gujrat",
      to:"Nagar",
      Departure:"27 Sep 2021",
      Arrival:"28 Sep 2021",
      depTime:"1:05 AM",
      arrTime:"2:05 AM",
      return:"30 Sep 2021",
      price:11000,

    }
  ]
  constructor(private http: HttpClient) { }
}
