import { Article } from "./article";

export class ArticleCommon {
    static plainTextToHtml(text: string): string {
      return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
    }

    static errorHandler(error) {
      if (error.status == 404) {
        window.location.replace("/404");
      } else {
        window.location.replace("/");
      }
    }
  }
  