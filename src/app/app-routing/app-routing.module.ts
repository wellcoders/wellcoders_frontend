import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './../article-list/article-list.component'
import { RegisterFormComponent } from './../register-form/register-form.component'

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
    }
    , {
      path: '**',
      redirectTo: '/posts'
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
