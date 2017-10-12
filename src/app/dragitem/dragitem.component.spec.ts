import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragitemComponent } from './dragitem.component';

describe('DragitemComponent', () => {
  let component: DragitemComponent;
  let fixture: ComponentFixture<DragitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
