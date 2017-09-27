import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorArticlesComponent } from './author-articles.component';

describe('ArticlesByAuthorComponent', () => {
  let component: AuthorArticlesComponent;
  let fixture: ComponentFixture<AuthorArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
