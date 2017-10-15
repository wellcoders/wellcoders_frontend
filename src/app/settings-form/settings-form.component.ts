import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { MdSnackBar } from '@angular/material';
import { User } from './../user';
import { UsersService } from './../users.service'; 
import { AuthenticationService } from './../authentication.service'; 

import { LocalStorageHandler } from './../local-storage-handler';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.css']
})
export class SettingsFormComponent extends LocalStorageHandler implements OnInit {

  public _user:User;
  public _editUser: boolean = false;
  public _editPwd: boolean = false;
  public _deleteUser: boolean = false;

  public oldpassword: string = "";
  public newpassword: string = "";
  public repeatpassword: string = "";
  public _username: string = "";

  public confirmdeletion: string = "";

  constructor(
    private _usersService: UsersService,
    private _authenticationService: AuthenticationService,
    private _router: Router,
    public snackBar: MdSnackBar
  ) { 
    super();
  }

  ngOnInit() {
    if(!this.user) {
      this._router.navigate(['/'])
    } else {
      this._user = this.user.user;
      this._username = this.user.user.username;
    }
  }

  resetProfile():void {
    this._user = this.user.user;
    this.close("_editUser");
  }

  resetPwd(f:FormGroup) {
    this.close("_editPwd");
    f.reset();
  }

  resetDelete() {
    this.close("_deleteUser");
    this.confirmdeletion = "";
  }

  open(dialog:string):void {
    this[dialog] = true;
  }

  close(dialog:string):void {
    this[dialog] = false;
  }

  changeStaterptPass(control: FormControl, form: NgForm): boolean {
    const controlTouched = (control.dirty || control.touched || (form && form.submitted));
    const controlHasValue = !!(control.value);
    const controlEqualNewPwd = controlHasValue ? control.value === form.controls.newpassword.value : false;

    return controlEqualNewPwd ? false : controlTouched;    
  }

  validatePasswords(a:FormControl, b:FormControl):boolean {
    return a.value != b.value;
  }

  profileChanges():boolean {
    if (!this.user) {
      return false;
    }
    const bdUser = this.user.user;
    return this._user.first_name != bdUser.first_name || this._user.last_name != bdUser.last_name || this._user.username != bdUser.username || this._user.email != bdUser.email;
  }

  updateProfile():void {
    let oUser = this.getUserToChange(['username', 'first_name', 'last_name', 'email']);
    this.updateUser(oUser);
  }

  getUserToChange(fields: [string]):any {
    let newUser = {};
    const bdUser = this.user.user;

    for (let ix  in fields) {
      if (this._user[fields[ix]] != bdUser[fields[ix]]) {
        newUser[fields[ix]] = this._user[fields[ix]];
      }
    }

    newUser['pk'] = bdUser.pk; 
    return newUser;
  }

  updatePassword():void {
    let oUser = {
      username: this.user.user.username,
      password: this.oldpassword
    }

    this._authenticationService.login(oUser).subscribe(
      result => {
        if(result){
          let oUser = {
            password: this.newpassword,
            pk: this.user.user.pk
          };
          this.updateUser(oUser);
        }
      },
      error => {
        this.snackBar.open('Incorrect current password', '', { duration: 5000 });
      }
    )
  }

  updateUser(newUser: any):void {
    this._usersService.update(newUser).subscribe(
      result => {
        if(result){
          this._editUser = false;
          this._editPwd = false;
          this._username = this.user.user.username;          
          this.snackBar.open('Changes OK', '', { duration: 5000 });
        }
      },
      error => {
        let a=1;
        error = error.json()
        // if(error.non_field_errors){
        //   this.snackBar.open(error.non_field_errors, '', { duration: 5000 });
        // }
        // else{
          this.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
//        }
      }
    )  
  }

  deleteUser():void {
    let oUser = {
      pk: this.user.user.pk
    }
    this._usersService.delete(oUser).subscribe(
      result => {
        if (result) {
            this.snackBar.open('We are sorry for your loss and we will be happy if you register again', '', { duration: 5000 });
            this._authenticationService.logout();
            this._router.navigate(['/'])
          }
      },
      error => {
        error = error.json();
        this.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
      }
    )
  }
}

