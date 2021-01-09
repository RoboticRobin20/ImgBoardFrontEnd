import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl: String = "http://localhost:8050/images";
  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>(this.baseUrl + "")
  }

  postImage(image: Image){
    console.log(this.baseUrl + "?userEmail=" + image.userEmail + "&source=" + image.source + "&description=" + image.description);
    return this.http.post(this.baseUrl + "?userEmail=" + image.userEmail + "&source=" + image.source + "&description=" + image.description, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))});
  }
}
