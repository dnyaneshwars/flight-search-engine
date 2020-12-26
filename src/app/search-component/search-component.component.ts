import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  fname = '';
  seldata = '';
  constructor() { }

  ngOnInit(): void {
  }
  nameChange() {
    console.log(this.fname);
  }
  dataSelected(data) {
    this.seldata = data.name;
  }

}
