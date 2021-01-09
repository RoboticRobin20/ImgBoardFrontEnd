import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { CommentModule } from '../comment/comment.module';
import { LikeModule } from '../like/like.module';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

@NgModule({
  declarations: [ImageListComponent, ImageDetailComponent, ImageFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FilePondModule,
    CommentModule,
    LikeModule
  ],
  exports: [
    FilePondModule
  ],
  providers: []
})
export class ImageModule { }
