import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestArticlesComponent } from './lastest-articles.component';

describe('LastestArticlesComponent', () => {
  let component: LastestArticlesComponent;
  let fixture: ComponentFixture<LastestArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastestArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
