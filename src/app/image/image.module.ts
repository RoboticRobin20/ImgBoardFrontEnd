import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageFormComponent } from './image-form/image-form.component';



@NgModule({
  declarations: [ImageListComponent, ImageDetailComponent, ImageFormComponent],
  imports: [
    CommonModule
  ]
})
export class ImageModule { }
