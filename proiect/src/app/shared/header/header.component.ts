import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _currentUser: UserService) {
  }

  ngOnInit() {
  }

  logOut() {
    if (this._currentUser.getCurrentUser()) {
      this._currentUser.logOut();
    }
  }

}
