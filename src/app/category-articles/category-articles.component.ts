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
  count: number;
  listName: string = ArticleWrapper.categoryList;
  category: string;
  searchText: string;

  title: string;
  subtitle: string;
  currentCategoryname: string;

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
        this.count = data.articles.count;
        this.articles = data.articles.articles;
        this.totalPages = data.articles.totalPages;
        this.pageSize = data.articles.pageSize;

        this.setHeader();
      }
    );

    this._activatedRoute
    .queryParams
    .subscribe(param => { 
      this.searchText = param.q;
      this.setHeader();
    });

    this._activatedRoute
    .params
    .subscribe(param => {
       this.currentCategoryname = param.categoryname
       this.setHeader();
     });
  }

  ngAfterViewInit() {
    this.scrollService.scrollToTop();
  }

  loadNextPage(pageNumber: number): void {
    this.articleService
      .getCategoryArticles(this.category, this.searchText, pageNumber)
      .subscribe(articleWrapper => {
        articleWrapper.articles.map(article => {
          this.articles.push(article);
        });
        this.totalPages = articleWrapper.totalPages;
      });
  }

  setHeader() {
    if (this.articles.length>0 || this.searchText) {
      this.title = `Artículos de ${this.currentCategoryname}`
    } else {
      this.title = `No hay artículos de  ${this.currentCategoryname}`
    }
    this.subtitle = "";
    if(this.searchText) {
      this.subtitle = `- ${this.count} contienen ${this.searchText}`;
    }
  }
}
