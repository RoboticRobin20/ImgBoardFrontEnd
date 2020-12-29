import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';



@NgModule({
  declarations: [ImageListComponent, ImageDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ImageModule { }
