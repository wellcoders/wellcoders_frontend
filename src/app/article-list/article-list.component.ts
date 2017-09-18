import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../article";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { ArticleService } from "./../article.service";

@Component({
  selector: "article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = this.articleService.getAticles();
    console.log(this.articles);
  }
}
