import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './../article-list/article-list.component'
import { RegisterFormComponent } from './../register-form/register-form.component'
import { ArticleFormComponent } from './../article-form/article-form.component'

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: `posts`,
      component: ArticleListComponent
    },
    // Para probar con dos urls, eliminar después
    {
      path: `register`, 
      component: RegisterFormComponent
    },
    {
      path: `article/create`, 
      component: ArticleFormComponent
    }, 
    {
      path: '**',
      redirectTo: '/article/create'
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
