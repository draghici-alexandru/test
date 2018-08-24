import { Component } from '@angular/core';
import { UserService } from 'app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proiect angular test';
  constructor(private _currentUser: UserService) {
  }
  user = this._currentUser.getCurrentUser();
}
