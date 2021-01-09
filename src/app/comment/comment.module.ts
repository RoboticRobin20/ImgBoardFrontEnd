import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CommentSectionComponent } from './comment-section/comment-section.component';



@NgModule({
  declarations: [CommentSectionComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    CommentSectionComponent
  ]
})
export class CommentModule { }
