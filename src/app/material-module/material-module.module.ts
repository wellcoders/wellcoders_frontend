import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule,
  MdInputModule
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
    AngularFontAwesomeModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    AngularFontAwesomeModule
  ]
})
export class MaterialModule {}
