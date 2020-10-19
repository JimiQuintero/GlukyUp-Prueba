import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  public data: any = [];
  paginaActual: number = 1;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getUser().subscribe( response => {
      this.data = response;
      console.log(this.data);
    })
  }

}
