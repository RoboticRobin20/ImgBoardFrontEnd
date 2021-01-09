import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { LikeService } from '../like.service';
import { ImageLike } from '../../models/image-like.model';
import { count, map } from 'rxjs/operators';

@Component({
  selector: 'app-like-section',
  templateUrl: './like-section.component.html',
  styleUrls: ['./like-section.component.scss']
})
export class LikeSectionComponent implements OnInit {

  likes: Observable<ImageLike[]>;
  like: ImageLike;
  likesCount: number = 0;
  constructor(private _likeService: LikeService) { 
    _likeService.getLikesByImage(JSON.parse(localStorage.getItem('currentImage')).imageKey).subscribe(result => {
      this.likesCount = result.length;
    });
  }

  postLike(){
    this.like = new ImageLike(JSON.parse(localStorage.getItem('user')).email, JSON.parse(localStorage.getItem('currentImage')).imageKey, true, "");
    this._likeService.postLike(this.like).subscribe(result =>{
      this._likeService.getLikesByImage(JSON.parse(localStorage.getItem('currentImage')).imageKey).subscribe(result => {
        this.likesCount = result.length;
      });
    });
  }

  ngOnInit(): void {
  }

}
