import { Component, Input, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { FormGroup } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogRef, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() rowStyle: string;
  @Output() login: EventEmitter<Object> = new EventEmitter();

  
  ngOnInit(): void {}

  constructor() { }

  submitUser(form: FormGroup): void {
      this.login.emit(form.value);
    }

}

@Component({
  templateUrl: './login-form-dialog.html'
})
export class LoginFormDialog {

  constructor(
    private _authService: AuthenticationService,
    public dialogRef: MdDialogRef<LoginFormDialog>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogin(user){
    this._authService.login(user).subscribe(
      result => {
        if(result){
          this.snackBar.open('Logged in', '', { duration: 5000 });
        }
      },
      error => {
        error = error.json()

        if(error.non_field_errors){
          this.snackBar.open(error.non_field_errors, '', { duration: 5000 });
        }
        else{
          this.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
        }
      }
    )
    this.dialogRef.close();
  }

}