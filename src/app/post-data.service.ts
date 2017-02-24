// Adapted from https://www.sitepoint.com/angular-2-tutorial/

import { Injectable } from '@angular/core';

import { Post } from './post';

@Injectable()
export class PostDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for posts
  posts: Post[] = [];

  constructor() {
  }

  // Simulate POST /posts
  addPost(post: Post): PostDataService {
    if (!post.id) {
      post.id = ++this.lastId;
    }
    this.posts.push(post);
    return this;
  }

  // Simulate DELETE /posts/:id
  deletePostById(id: number): PostDataService {
    this.posts = this.posts
      .filter(post => post.id !== id);
    return this;
  }

  // Simulate PUT /posts/:id
  updatePostById(id: number, values: Object = {}): Post {
    let post = this.getPostById(id);
    if (!post) {
      return null;
    }
    Object.assign(post, values);
    return post;
  }

  // Simulate GET /posts
  getAllPosts(): Post[] {
    return this.posts;
  }

  // Simulate GET /posts/:id
  getPostById(id: number): Post {
    return this.posts
      .filter(post => post.id === id)
      .pop();
  }

}
