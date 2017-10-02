import { NgModule, LOCALE_ID } from "@angular/core";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

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
  MdSelectModule,
  MdProgressBarModule
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
    MdSelectModule,
    AngularFontAwesomeModule,
    MdProgressBarModule
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
    MdSelectModule,
    AngularFontAwesomeModule,
    MdProgressBarModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES'},
  ]
})
export class MaterialModule {}

