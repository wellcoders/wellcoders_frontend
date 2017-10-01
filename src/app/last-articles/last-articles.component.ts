import {
  Component,
  NgModule,
  OnInit,
  Input,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { Article } from "./../article";
import { ArticleWrapper } from "./../article-wrapper";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ActivatedRoute } from "@angular/router";
import { environment } from "./../../environments/environment";
import { ArticleService } from "./../article.service";

@Component({
  selector: "last-articles",
  templateUrl: "./last-articles.component.html",
  styleUrls: ["./last-articles.component.css"]
})
export class LastArticlesComponent implements OnInit {
  articles: Article[];
  totalPages: number;
  pageSize: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        this.articles = data.articles.articles;
        this.totalPages = data.articles.totalPages;
        this.pageSize = data.articles.pageSize;
      }
    );
  }

  loadNextPage(pageNumber: number): void {
    console.log(`Cargando artículos página ${pageNumber}`);
    this.articleService.getArticles(pageNumber).subscribe(articleWrapper => {
      articleWrapper.articles.map(article => {
        this.articles.push(article);
      });
    });
  }
}
