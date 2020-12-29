import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageModule } from './image/image.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { SecurityModule } from './security/security.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageModule,
    LikeModule,
    CommentModule,
    SecurityModule,
    SharedModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    ImageModule,
    LikeModule,
    CommentModule,
    SecurityModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
