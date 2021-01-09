import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './image/image-list/image-list.component';
import { ImageDetailComponent } from './image/image-detail/image-detail.component';
import { ImageFormComponent } from './image/image-form/image-form.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component'


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'images', component: ImageListComponent },
  { path: 'images/detail', component: ImageDetailComponent },
  { path: 'postImage', component: ImageFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
