import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormCreateComponent } from './article-form-create.component';

describe('ArticleFormCreateComponent', () => {
  let component: ArticleFormCreateComponent;
  let fixture: ComponentFixture<ArticleFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
