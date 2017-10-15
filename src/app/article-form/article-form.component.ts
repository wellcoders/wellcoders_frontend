import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateAdapter, MdSnackBar } from '@angular/material';
import { Article } from './../article'
import { CategoriesService } from './../categories.service'
import { ArticleService } from './../article.service'
import { LocalStorageHandler } from './../local-storage-handler'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MediaService } from './../media.service'
import { environment } from './../../environments/environment';
import { DragelementDirective } from './../dragelement.directive'
//import { UtilsModule } from "./../utils-module/utils-module.module";
import { NativeWindow } from './../window';


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
  title_slug = undefined;
  summary = undefined;
  content = undefined;
  status = undefined;
  hour = undefined;
  minute = undefined;
  publish_date = undefined;
  categories = [];
  category_id = undefined;
  result = undefined;
  media = undefined;

  mode = 'create'

  that = this;

  constructor(
    private _categories: CategoriesService,
    private _articles: ArticleService,
    private _router: Router,
    public snackBar: MdSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _media: MediaService,
    @Inject(NativeWindow) private _window
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
        if(data['articles']){
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
          this.media = this.article.media;
          this.title_slug = this.article.title_slug;

          if(this.categories){
            this.category_id = this.article.category.pk
          }
          this.hour = this.publish_date.getHours();
          this.minute = this.publish_date.getMinutes();
        }
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

  putResource(event, field, image_size='', append=false, only_url=true){
    event.preventDefault();
    event.stopPropagation();

    var element = event.srcElement;

    if(event.dataTransfer.files.length == 1){
      
      var file = event.dataTransfer.files[0];

      var formData = new FormData()
      formData.append('file', file);
    
      this._media.uploadFile(formData).subscribe(
        success => {
          var responseObject = success.json()
          
          var result = environment.url + '/static/uploads/' + responseObject.name + image_size + responseObject.extension;
          
          if(!only_url){
            result = '<img src="' + result + '" />'
          }

          if(append)
          {
            this[field] = this[field] + result;
          }else{
            this[field] = result
          }         
        
        }
      );

    }
 
  }

  onDragOver(event){
    debugger;
  }

  onDragLeave(event){
    debugger;
  }


}
