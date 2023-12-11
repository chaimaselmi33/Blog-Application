import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './Interfaces/contact/contact.component';
import { PostDetailsComponent } from './Interfaces/post/post-details/post-details.component';
import { GetPostsComponent } from './Interfaces/post/get-posts/get-posts.component';
import { HomeComponent } from './Interfaces/home/home.component';
import { AddPostComponent } from './Interfaces/post/add-post/add-post.component';
import { CommentComponent } from './Interfaces/comment/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PostDetailsComponent,
    GetPostsComponent,
    HomeComponent,
    AddPostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
