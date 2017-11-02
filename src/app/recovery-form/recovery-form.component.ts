import { Component, Input, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { FormGroup } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";
import { MdDialog, MdDialogRef, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.css']
})
export class RecoveryFormComponent implements OnInit {
  @Input() rowStyle: string;
  @Output() recovery: EventEmitter<Object> = new EventEmitter();

  
  ngOnInit(): void {}

  constructor() { }

  submitUser(form: FormGroup): void {
      this.recovery.emit(form.value);
    }

}

@Component({
  templateUrl: './recovery-form-dialog.html'
})
export class RecoveryFormDialog {

  constructor(
    private _authService: AuthenticationService,
    public dialogRef: MdDialogRef<RecoveryFormDialog>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRecovery(user){
    this._authService.recovery(user).subscribe(
      result => {
        result = result.json()

        this.snackBar.open(result.success, '', { duration: 5000 });
      },
      error => {
        this.snackBar.open('An error ocurred. Try again later', '', { duration: 5000 });
      }
    )
    this.dialogRef.close();
  }

}