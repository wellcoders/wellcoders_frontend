import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from './../users.service';
import { FormGroup } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";

import { User } from './../user';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [UsersService]
})
export class RegisterFormComponent implements OnInit {
  private _userSubscription: Subscription;
  
  ngOnInit(): void {}

  constructor(
    private _usersService: UsersService) { }

  submitUser(form: FormGroup): void {
      // let user: User = User.fromJson(form.value);
      this._usersService.register(form.value);
    }

}
