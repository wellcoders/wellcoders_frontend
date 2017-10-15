import {
  Component,
  NgModule,
  OnInit,
  Input,
  Inject,
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
import { ScrollService } from "./../scroll.service";

@Component({
  selector: "category-articles",
  templateUrl: "./category-articles.component.html",
  styleUrls: ["./category-articles.component.css"]
})
export class CategoryArticlesComponent implements OnInit {
  articles: Article[];
  totalPages: number;
  pageSize: number;
  listName: string = ArticleWrapper.categoryList;
  category: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    public scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (data: { articles: ArticleWrapper }) => {
        if (data.articles.articles.length > 0) {
          this.category = data.articles.articles[0].category.name;
        }
        this.articles = data.articles.articles;
        this.totalPages = data.articles.totalPages;
        this.pageSize = data.articles.pageSize;
      }
    );
  }

  ngAfterViewInit() {
    this.scrollService.scrollToTop();
  }

  loadNextPage(pageNumber: number): void {
    this.articleService
      .getCategoryArticles(this.category, pageNumber)
      .subscribe(articleWrapper => {
        articleWrapper.articles.map(article => {
          this.articles.push(article);
        });
        this.totalPages = articleWrapper.totalPages;
      });
  }
}
