import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Input() name = '';
  tableData = [];
  @Output() selected = new EventEmitter();
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getUser().subscribe(res => {
      this.tableData = res;
      console.log(this.tableData);
    });
  }
  selectedEvent(data) {
    this.selected.emit(data);
  }

}
