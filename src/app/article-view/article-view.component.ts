import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'umss-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {


  articleid: string;
  articleViewed: Article = {
    title: '',
    content: '',
    author: '',
    comments: ''
  };
  constructor(
    private activateroute: ActivatedRoute,
    private articleservice: ArticleService
  ) { }


  ngOnInit() {
    this.activateroute.params
      .subscribe(
        (paramss) => {
          //console.log('parametros resibidos', paramss.id);
          this.articleid = paramss.id;
          this.articleservice.getArticleById(this.articleid)
            .subscribe(
              (response) => {
                console.log('respuesta del servidor', response);
                this.articleViewed = response.data;
                console.log('', this.articleViewed);
              }, (error) => {
                console.log('error del servidor', error);
              }
            );

        }
      )

  }
}
