import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';
import { AuthenticationService } from '../../security/authentication.service';
import { Comment } from '../../models/comment.model';
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  @Input() imageKey: string;
  authenticated: boolean;
  comments: Observable<Comment[]>;
  comment: Comment;
  constructor(private _commentService: CommentService, private _autenticationService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.authenticated = _autenticationService.isLoggedIn();
  }


  postComment(comment: Comment) {
    // comment.userID = JSON.parse(localStorage.getItem('user')).userID;
    this._commentService.postComment(comment).subscribe(result => {
      this.comments = this._commentService.getCommentsByImage(this.imageKey);
      this.comment.description = '';
    });
  }

  ngOnInit(): void {
    // this.articleid = parseInt(activatedRoute.snapshot.paramMap.get('articleID'));
    this.comment = new Comment(this.imageKey, JSON.parse(localStorage.getItem('user')).email, '', '', null);
    this.comments = this._commentService.getCommentsByImage(this.imageKey);
  }
}
