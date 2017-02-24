import { Component } from '@angular/core';

import { Post } from './post';
import { PostDataService } from './post-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PostDataService ]
})
export class AppComponent {

  newPost: Post = new Post();

  constructor(private postDataService: PostDataService) {
  }

  addPost() {
    this.newPost.creationTime = Date.now();
    this.postDataService.addPost(this.newPost);
    this.newPost = new Post();
  }

  removePost(post) {
    this.postDataService.deletePostById(post.id);
  }

  get posts() {
    return this.postDataService.getAllPosts();
  }

}