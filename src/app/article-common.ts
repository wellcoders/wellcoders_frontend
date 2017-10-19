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
    router.navigate([`${username}`], navigationExtras);
  }

  static navigateToDrafts(username: string, router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`${username}/drafts`], navigationExtras);
  }

  static navigateToDeleted(username: string, router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`${username}/deleted`], navigationExtras);
  }

  static navigateToFavorites(router: Router): void {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    router.navigate([`/favorites`], navigationExtras);
  }

  static statusVaues = {
    published: 'PUB',
    drafts: 'DRF',
    deleted: 'DEL'
  }

  static plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : "";
  }
}
  