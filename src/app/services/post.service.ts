import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostsModelo } from '../models/posts.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://gorest.co.in/public-api/users/1498/posts';
  // private apiToken = '91b6121001b63ac4006ecfa082f5ffa09178fcba29cf9caffdfe07ab3bb7f71f'

  constructor(private http: HttpClient) {
    console.log('Servicio posts funcionando');
   }

   getPosts() {
     return this.http.get('https://gorest.co.in/public-api/posts')
     .pipe(
       map( iterator => {
         console.log(iterator);
         return iterator;
       })
     );
   }

   getUser() {
    return this.http.get('https://gorest.co.in/public-api/users/1498/posts')
    .pipe(
      map( iterator => {
        console.log(iterator);
        return iterator;
      })
    );
  }

   savePost(post: PostsModelo) {

    const postData = {
      ...post,
    }

    const headers = { 'Authorization': 'Bearer 91b6121001b63ac4006ecfa082f5ffa09178fcba29cf9caffdfe07ab3bb7f71f'};

    return this.http.post(`${this.url}`, postData, {headers}   )
      .pipe(
        map( resp => {
          return resp;
        })
      );
   }
}
