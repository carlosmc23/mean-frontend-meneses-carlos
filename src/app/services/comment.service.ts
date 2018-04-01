import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { articleToComment } from "../model/comment";


const commentApiUrl = 'http://localhost:3000/comments';




@Injectable()
export class CommentService {

  constructor(
    private myhttpclient: HttpClient
  ) { }

  createComment(newComment:articleToComment):Observable<any>{
    return this.myhttpclient.post(commentApiUrl, newComment);
  }



}
