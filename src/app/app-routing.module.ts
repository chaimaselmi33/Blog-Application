import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Interfaces/contact/contact.component';
import { PostDetailsComponent } from './Interfaces/post/post-details/post-details.component';
import { HomeComponent } from './Interfaces/home/home.component';
import { AddPostComponent } from './Interfaces/post/add-post/add-post.component';
import { CommentComponent } from './Interfaces/comment/comment/comment.component';

const routes: Routes = [

  { path: 'contact', component: ContactComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: '', component: HomeComponent},
  { path: 'category/:cat', component: HomeComponent},
  { path: 'add-post', component: AddPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
