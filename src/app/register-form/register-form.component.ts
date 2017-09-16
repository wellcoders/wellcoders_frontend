import { Component, Input, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { UsersService } from './../users.service';
import { FormGroup } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogRef, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [UsersService]
})
export class RegisterFormComponent implements OnInit {
  @Input() rowStyle: string;
  @Output() registerUser: EventEmitter<Object> = new EventEmitter();

  
  ngOnInit(): void {}

  constructor() { }

  submitUser(form: FormGroup): void {
      this.registerUser.emit(form.value);
    }

}

@Component({
  templateUrl: './register-form-dialog.html'
})
export class RegisterFormDialog {

  constructor(
    private _usersService: UsersService,
    public dialogRef: MdDialogRef<RegisterFormDialog>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRegisterUser(user){
    this._usersService.register(user).subscribe(
      success => {
        this.snackBar.open('Your request have been processed with success!', 'Try to login and enjoy!', { duration: 2000 });
      },
      error => {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    );
    this.dialogRef.close();
  }

}