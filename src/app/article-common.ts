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

  static navigateToAuthor(username: string, router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`articles/${username}`], navigationExtras);
  }

  static navigateToDrafts(router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`user/articles/drafts`], navigationExtras);
  }

  static navigateToDeleted(router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`user/articles/deleted`], navigationExtras);
  }

  static navigateToFavorites(router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`user/favorites`], navigationExtras);
  }

  static statusValues = {
    published: 'PUB',
    drafts: 'DRF',
    deleted: 'DEL'
  }

  static plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }
}
  