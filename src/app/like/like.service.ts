import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageLike } from '../models/image-like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  baseUrl: string = "http://localhost:8050/likes"
  constructor(private http: HttpClient) { }
  
  getLikesByImage(imageKey: string): Observable<ImageLike[]>{
    return this.http.get<ImageLike[]>(this.baseUrl + '/image/' + imageKey);
  }
  getUserLike(imageKey: string, userEmail: string){
    return this.http.get<ImageLike>(this.baseUrl + '/image/' + imageKey + '/user/'+ userEmail);
  }
  postLike(like: ImageLike){
    return this.http.post<ImageLike>(this.baseUrl + "?userEmail=" + like.userEmail + "&imageKey=" + like.imageKey + "&state=" + like.state, like);
  }
  putLike(likestate: boolean, likeKey: string){
    return this.http.put<ImageLike>(this.baseUrl + "?likeKey=" + likeKey + "&state=" + likestate, new ImageLike("", "", true, ""))
  }
  deleteLike(likeKey: string){
    return this.http.delete<ImageLike>(this.baseUrl + "?likeKey=" + likeKey)
  }
}
