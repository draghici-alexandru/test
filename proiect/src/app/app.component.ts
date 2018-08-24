import { Component } from '@angular/core';
import { UserService } from 'app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loggedIn;
  public loggedInSession;
  title = 'Proiect angular test';
  constructor(private _userService: UserService) {
    this.loggedIn = this._userService.getEmail();
    this.loggedInSession = this._userService.getEmailSession();
  }
}
