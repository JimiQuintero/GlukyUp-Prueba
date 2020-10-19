import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModelo } from "src/app/models/usuario.model";
import { AuthService } from 'src/app/services/auth.service';

// SweetAlert2
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModelo;


  constructor(private authSvc: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModelo();
  }


 async onSubmit(form: NgForm) {

  if (form.invalid) {
    Swal.fire({
      allowOutsideClick: false,
      title: 'Error!',
      text: 'Complete el Formulario!!..',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return;
  }
   const {email, password} = this.usuario;
   try {
     const user = await this.authSvc.register(email, password);
       Swal.showLoading();
     if (user) {
      Swal.fire({
        allowOutsideClick: false,
        // title: 'Error!',
        text: 'Usuario registrado...',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.route.navigateByUrl('/home');
     }
   } catch (error) {
     console.log(error);
   }

   console.log(form.value);


 }

}
