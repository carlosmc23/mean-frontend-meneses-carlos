import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { articleToComment } from '../model/comment';
import { CommentService } from '../services/comment.service';


@Component({
  selector: 'umss-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  articleId: string;
  articleViewed: Article = {
    _id: '',
    title: '',
    content: '',
    author: '',
    comments: ''
  };
  constructor(
    private activateroute: ActivatedRoute,
    private articleservice: ArticleService,
    private commentservice: CommentService,
    private router: Router
  ) { }
  ngOnInit() {
    this.activateroute.params
      .subscribe(
        (paramss) => {
          //console.log('parametros resibidos', paramss.id);
          this.articleId = paramss.id;
          this.articleservice.getArticleById(this.articleId)
            .subscribe(
              (response) => {
                //console.log('respuesta del servidor', response);
                this.articleViewed = response.data;
                //console.log('', this.articleViewed);
              }, (error) => {
                console.log('error del servidor', error);
              }
            );
        }
      )
  }
  commentToCreate: articleToComment = {
    articleid: '',
    comment: {
      content: '',
      author: ''
    }
  };
  createNewComment(): void {
    this.commentToCreate.articleid = this.articleViewed._id;
    //console.log('id del articulo a comentar: ', this.commentToCreate.articleid);
    //console.log('contenido del comentario: ', this.commentToCreate.comment.content);
    //console.log('contenido del comentario: ', this.commentToCreate);
    this.commentservice.createComment(this.commentToCreate)
      .subscribe(
        (response) => {
          console.log('respuesta del servidor: ', response);
          alert('el comentario fue insertado correctamente');
          location.reload();
          //this.router.navigate(['article',this.articleViewed._id,'view'])
        }, (error) => {
          console.log('error: ', error)
        }
      )
  }
  deleteComment():void{

  }
  updateComment():void{

  }
}
