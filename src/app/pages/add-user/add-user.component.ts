import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user: IUser | any = {};
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  addUser() {
    this.sharedService.users.push(this.user);
  }
}
