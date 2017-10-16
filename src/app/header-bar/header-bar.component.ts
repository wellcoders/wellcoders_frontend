import { Component, Inject, OnInit, Output, EventEmitter } from "@angular/core";
import { UtilsModule } from "./../utils-module/utils-module.module";
import { RegisterFormDialog } from "./../register-form/register-form.component";
import { LoginFormDialog } from "./../login-form/login-form.component";
import { CategoriesService } from "./../categories.service";
import { MdDialog, MdDialogRef, MdSnackBar, MD_DIALOG_DATA } from '@angular/material';
import { LocalStorageHandler } from "./../local-storage-handler"
import { AuthenticationService } from './../authentication.service';
import { Router, Params, NavigationExtras } from '@angular/router';
import { Category } from "./../category";
import { ArticleCommon } from "./../article-common";


@Component({
  selector: "header-bar",
  templateUrl: "./header-bar.component.html",
  styleUrls: ["./header-bar.component.css"]
})
export class HeaderBarComponent extends LocalStorageHandler implements OnInit {
  @Output() whenCategorySelected: EventEmitter<Category> = new EventEmitter<Category>();
  categories = [];

  constructor(
    private _authService: AuthenticationService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
    public categoriesService: CategoriesService,
    private _router: Router) {
      super();
    }

  ngOnInit() {
    this.categoriesService.list().subscribe((categories: Object[]) => {
      this.categories = categories;
    });
  }

  logout():void{
    this.snackBar.open('Goodbye, '+ this.user.user.first_name+ '. See you soon!', '', { duration: 5000 });
    this._authService.logout();
    this._router.navigate(['/'])
  }

  createArticle():void{
    this._router.navigate(['/article/create']);
  }

  drafts():void {
    ArticleCommon.navigateToDrafts(this.user.user.username, this._router);
  }

  deleted():void {
    ArticleCommon.navigateToDeleted(this.user.user.username, this._router);
  }

  favorites():void {
    ArticleCommon.navigateToFavorites(this._router);
  }

  settings():void {
    this._router.navigate(['/users/settings']);
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginFormDialog, {
      width: '455px'
    });

  }

  openRegisterDialog(): void {
    let dialogRef = this.dialog.open(RegisterFormDialog, {
      width: '455px'
    });
  }

  goHome():void {
    this._router.navigate(['/']);
  } 
  notifyCategorySelected(category: Category): void {
    ArticleCommon.navigateToCategory(category, this._router);
  }

  search(text: string): void {
    this._router.navigate([ `/search`], { queryParams: { q: text } });
  }


}

