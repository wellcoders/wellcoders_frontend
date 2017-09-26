import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesByAuthorComponent } from './articles-by-author.component';

describe('ArticlesByAuthorComponent', () => {
  let component: ArticlesByAuthorComponent;
  let fixture: ComponentFixture<ArticlesByAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesByAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
