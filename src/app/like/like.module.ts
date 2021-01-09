import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeSectionComponent } from './like-section/like-section.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LikeSectionComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    LikeSectionComponent
  ]
})
export class LikeModule { }
