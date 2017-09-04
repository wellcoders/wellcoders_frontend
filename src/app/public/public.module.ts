import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderBarComponent } from "./../header-bar/header-bar.component";
import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MdToolbarModule],
  declarations: [HeaderBarComponent],
  exports: [HeaderBarComponent]
})
export class PublicModule {}
