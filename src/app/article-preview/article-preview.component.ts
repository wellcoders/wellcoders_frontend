import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Article } from "./../article";
import { User } from './../user';
import { UtilsModule } from "./../utils-module/utils-module.module";

@Component({
  selector: "article-preview",
  templateUrl: "./article-preview.component.html",
  styleUrls: ["./article-preview.component.css"]
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;
  @Input() user: User;
  @Output() alSeleccionarAutor: EventEmitter<User>;

  constructor() {
    this.alSeleccionarAutor = new EventEmitter<User>();
  }

  ngOnInit() {}

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }

  // Notificamos la pulsación sobre el botón de 'Article Preview'
  notifyUserArticle(user: User): void {
    this.alSeleccionarAutor.emit(user);
  }
}
