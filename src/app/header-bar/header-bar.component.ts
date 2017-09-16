import { Component, Inject, OnInit } from "@angular/core";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { RegisterFormDialog } from "./../register-form/register-form.component"
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: "header-bar",
  templateUrl: "./header-bar.component.html",
  styleUrls: ["./header-bar.component.css"]
})
export class HeaderBarComponent implements OnInit {
  constructor(public dialog: MdDialog) {}

  ngOnInit() {}

  openRegisterDialog(): void {
    let dialogRef = this.dialog.open(RegisterFormDialog, {
      width: '500px'
    });

  }
}

