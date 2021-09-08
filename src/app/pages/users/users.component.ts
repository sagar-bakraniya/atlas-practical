import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  dtOptions: DataTables.Settings = {};
  isDataReady=false;
  constructor(
    public sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      data: this.sharedService.users,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
    setTimeout(() => {
      this.isDataReady = true;
    }, 1000);
  }
}
