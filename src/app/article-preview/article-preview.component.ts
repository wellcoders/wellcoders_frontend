import { Component, OnInit, Input } from "@angular/core";
import { Article } from "./../article";
import { UtilsModule } from "./../utils-module/utils-module.module";

@Component({
  selector: "article-preview",
  templateUrl: "./article-preview.component.html",
  styleUrls: ["./article-preview.component.css"]
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit() {}

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }
}
