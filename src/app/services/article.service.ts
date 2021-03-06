import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from "../model/article";

const articleApiUrl = 'http://localhost:3000/articles';

@Injectable()
export class ArticleService {


  constructor(
    private myhttpclient: HttpClient,
  ) { }

  getArticleList():Observable<any>{
    return this.myhttpclient.get(articleApiUrl);
  }
  getArticleById(articleid: string): Observable<any> {
    return this.myhttpclient.get(`${articleApiUrl}/${articleid}`);
  }
  createArticle(newArticle: Article): Observable<any>{
    return this.myhttpclient.post(articleApiUrl, newArticle);
    }
}
