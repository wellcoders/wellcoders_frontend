import { NgModule, LOCALE_ID } from "@angular/core";

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdDialogModule, 
  MdSnackBarModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdDialogModule, 
    MdSnackBarModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdDialogModule, 
    MdSnackBarModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES'},
  ],
})
export class MaterialModule {}

