import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: string = "http://localhost:8050/comments";
  constructor(private http: HttpClient) { }
  
  getCommentsByImage(imageKey: string): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.baseUrl + '/images/' + JSON.parse(localStorage.getItem('currentImage')).key);
  }
  postComment(comment: Comment){
    return this.http.post(this.baseUrl + "?userEmail=" + comment.userEmail + "&imageKey=" + comment.imageKey + "&title=" + comment.title + "&description=" + comment.description, "");
  }
}
