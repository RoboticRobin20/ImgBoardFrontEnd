import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: string = "http://192.168.99.100:8050";
  constructor(private http: HttpClient) { }
  
  getCommentsByImage(imageKey: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.baseUrl + '/images/' + imageKey);
  }
  postComment(comment: Comment){
    return this.http.post<Comment>(this.baseUrl + '/comments', comment);
  }
}
