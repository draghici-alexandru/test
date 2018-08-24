import { Component , OnInit} from '@angular/core';
import { UserService } from 'app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Proiect angular test';

  constructor(private _currentUser: UserService) {
  }

  ngOnInit() {
    let logged = window.localStorage.getItem('email');
    if ( logged ) {
       this._currentUser.setCurrentUser(logged);
    }
    let logged = window.sessionStorage.getItem('email');
    if ( logged ) {
       this._currentUser.setCurrentUser(logged);
    }
  }
}
