import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from "./../header-bar/header-bar.component";
import { MaterialModule } from "./../material-module/material-module.module";
import { PublicModule } from "./../public-module/public.module";


@NgModule({
  imports: [CommonModule, MaterialModule, PublicModule],
  declarations: [HeaderBarComponent],
  exports: [HeaderBarComponent]
})
export class UtilsModule { }
