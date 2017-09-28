import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateAdapter } from '@angular/material';
import { Article } from './../article'
import { CategoriesService } from './../categories.service'

@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  statuses = [{code: 'DRF', name: 'Draft'},
              {code: 'PUB', name: 'Published'}];
  
  constructor(
    private _categories: CategoriesService
  ) {
  }

  hour = undefined;
  minute = undefined;
  publish_date = undefined;
  categories = [];
  result = undefined;

  ngOnInit() {
    this._categories.list().subscribe((categories: Object[]) => this.categories = categories);
  }

  publish(form: FormGroup):void{
    if(form.value.publish_date){

      this.hour = this.hour ? this.hour > 23 ? 23 : this.hour < 0 ? 0 : this.hour : 0;
      this.minute = this.minute ? this.minute > 59 ? 59 :  this.minute < 0 ? 0: this.minute : 0;

      this.publish_date.setHours(this.hour, this.minute)
    }else{
      this.publish_date = new Date(Date.now())
      
      this.hour = this.publish_date.getHours()
      this.minute = this.publish_date.getMinutes()
    }

    debugger;
  }

}
