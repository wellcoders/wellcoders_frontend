import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Wellcoders';

  constructor(
    private _authService: AuthenticationService) {
    }
  
  ngOnInit() {
    this._authService.refresh()
  }
}
