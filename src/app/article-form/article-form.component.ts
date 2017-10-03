import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateAdapter, MdSnackBar } from '@angular/material';
import { Article } from './../article'
import { CategoriesService } from './../categories.service'
import { ArticleService } from './../article.service'
import { LocalStorageHandler } from './../local-storage-handler'
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent extends LocalStorageHandler implements OnInit {
  statuses = [{code: 'DRF', name: 'Draft'},
              {code: 'PUB', name: 'Published'}];
  
  article = undefined;
  title = undefined;
  summary = undefined;
  content = undefined;
  status = undefined;
  hour = undefined;
  minute = undefined;
  publish_date = undefined;
  categories = [];
  category_id = undefined;
  result = undefined;

  mode = 'create'

  constructor(
    private _categories: CategoriesService,
    private _articles: ArticleService,
    private _router: Router,
    public snackBar: MdSnackBar,
    private _activatedRoute: ActivatedRoute
  ) {
    super();
  }

  
  ngOnInit() {
    if(!this.user){
      this._router.navigate(['/'])
    }else{
      this._categories.list().subscribe((categories: Object[]) => {
        this.categories = categories;
        if(this.article){
          this.category_id = this.article.category.pk
        }
      });
    }

    this._activatedRoute.data.subscribe(
      (data: { data: Object}) => {
        this.article = data['articles'].json()
      
        if(this.article && this.article.owner.username != this.user.user.username){
          this._router.navigate(['/'])
        }

        this.mode = 'update'

        this.publish_date = new Date(this.article.publish_date);
        this.title = this.article.title;
        this.summary = this.article.summary;
        this.status = this.article.status;
        this.content = this.article.content;

        if(this.categories){
          this.category_id = this.article.category.pk
        }
        this.hour = this.publish_date.getHours();
        this.minute = this.publish_date.getMinutes();
      }
    )
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

    var article = form.value
    article.publish_date = this.publish_date
    
    delete article.hour
    delete article.minute

    if(form.valid){
      if(this.mode == 'update'){
        article.pk = this.article.pk;
        this._articles.updateArticle(article).subscribe(
          success => {
            this.snackBar.open('Your article has been updated!', '', { duration: 5000 });
            this._router.navigate(['/']);
          },
          error => {
            var message = 'An error ocurred. Please, try again later.'
            
            this.snackBar.open(message, '', { duration: 5000 });
          }

        );
      }else{
        this._articles.createArticle(article).subscribe(
          success => {
            this.snackBar.open('Your article has been created!', '', { duration: 5000 });
            this._router.navigate(['/']);
          },
          error => {
            var message = 'An error ocurred. Please, try again later.'
            
            this.snackBar.open(message, '', { duration: 5000 });
          }

        );
      }
    }
  }

}
