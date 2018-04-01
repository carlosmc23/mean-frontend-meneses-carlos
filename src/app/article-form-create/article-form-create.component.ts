import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'umss-article-form-create',
  templateUrl: './article-form-create.component.html',
  styleUrls: ['./article-form-create.component.css']
})
export class ArticleFormCreateComponent implements OnInit {


  articleToCreate: Article = {
    title: '',
    content: '',
    author: ''
  }

  constructor(
    private articleservice: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  createNewarticle():void{
    this.articleservice.createArticle(this.articleToCreate)
      .subscribe(
        (response) => {
          console.log('respuesta del servidor: ', response);
          alert('el articulo fue creado correctamente');
          this.router.navigate(['article/list'])
        }, (error) => {
          console.log('error: ', error)
        }
      )
    }

}
