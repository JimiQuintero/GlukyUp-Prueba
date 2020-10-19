import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsModelo } from 'src/app/models/posts.model';
import { PostService } from 'src/app/services/post.service';

// Sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostsModelo;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = new PostsModelo();
  }

  guardar(form: NgForm) {
    // console.log(form.value);
    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      // title: 'Error!',
      text: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Ok'
    });

    Swal.showLoading();

    this.postService.savePost(this.posts).subscribe( resp => {
      console.log(resp);
    })

    Swal.close();

    Swal.fire({
      allowOutsideClick: false,
      // title: 'Error!',
      text: 'Publicación Exitosa...',
      icon: 'success',
      confirmButtonText: 'Ok',
      padding: '4.5rem',
    });
  }

}
