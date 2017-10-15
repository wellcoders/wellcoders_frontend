import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Article } from "./article";
import { Category } from "./category";

export class ArticleCommon {
  static navigateToCategory(category: Category, router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`/tag/${category.name}`], navigationExtras);
  }






  static plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }

  static errorHandler(error) {
    if (error.status == 404) {
      window.location.replace("/404");
    } else {
      console.error(error.stack);
    }
  }
}
  