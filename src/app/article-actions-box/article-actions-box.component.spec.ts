import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleActionsBoxComponent } from './article-actions-box.component';

describe('ArticleActionsBoxComponent', () => {
  let component: ArticleActionsBoxComponent;
  let fixture: ComponentFixture<ArticleActionsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleActionsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleActionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
