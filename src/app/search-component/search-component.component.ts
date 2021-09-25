import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../FlightDataService.service';
export interface searchObj {
  origin: '',
  destination: '',
  departDate: null,
  returnDate: null,
  passenger: 0
}
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  fname = '';
  seldata = '';
  id = 1;
  passenger = [];
  searchData: searchObj = {
    origin: '',
    destination: '',
    departDate: null,
    returnDate: null,
    passenger: 0
  };
  flightData = [];
  from = "All";
  to = "All";
  returnFlight = false;
  flightDataArray;
  constructor(private flightDataSer: FlightDataService) { }

  ngOnInit(): void {
    console.log(this.searchData);
    this.passenger = Array(100);
    console.log(this.passenger);
    this.flightDataArray = this.flightDataSer.flights;
    this.flightData = this.flightDataSer.flights;
  }
  nameChange() {
    console.log(this.fname);
  }
  dataSelected(data) {
    this.seldata = data.name;
  }
  open(id) {
    this.id = id;
    id == 2 ? this.returnFlight = true : this.returnFlight = false;
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  searchDataEvent() {
    console.log(this.searchData);
    this.from = this.searchData.origin;
    this.to = this.searchData.destination;

    this.flightData = this.flightDataArray.filter(obj => {

      return (obj.from.toLowerCase() == this.searchData.origin.toLowerCase() && obj.to.toLowerCase() == this.searchData.destination.toLowerCase() &&
        new Date(obj.Departure).getDate() == new Date(this.searchData.departDate).getDate()
        && new Date(obj.Departure).getMonth() == new Date(this.searchData.departDate).getMonth()
        && new Date(obj.Departure).getFullYear() == new Date(this.searchData.departDate).getFullYear())
    })
    if (this.returnFlight) {
      this.flightData = this.flightDataArray.filter(obj => {
        return (obj.from.toLowerCase() == this.searchData.origin.toLowerCase() && obj.to.toLowerCase() == this.searchData.destination.toLowerCase() &&
          new Date(obj.Departure).getDate() == new Date(this.searchData.departDate).getDate()
          && new Date(obj.Departure).getMonth() == new Date(this.searchData.departDate).getMonth()
          && new Date(obj.Departure).getFullYear() == new Date(this.searchData.departDate).getFullYear() &&
          new Date(obj.return).getDate() == new Date(this.searchData.returnDate).getDate()
          && new Date(obj.return).getMonth() == new Date(this.searchData.returnDate).getMonth()
          && new Date(obj.return).getFullYear() == new Date(this.searchData.returnDate).getFullYear())
      })
    }
  }
}
