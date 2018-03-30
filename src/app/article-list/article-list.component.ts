import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'umss-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[] = [];

  constructor(
    private articleservice: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleservice.getArticleList().subscribe(
      (response) => {
        this.articleList = response.data;
      }, (error) => {
        console.log('Error: ', error);
      }
    )
  }
  viewArticle(articleId):void{
    this.router.navigate(['article',articleId,'view']);
  }


}
