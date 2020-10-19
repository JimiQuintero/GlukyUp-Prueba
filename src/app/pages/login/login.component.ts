import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModelo } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

// SweetAlert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModelo;
  constructor(private authSvc: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModelo();
  }

  login(form: NgForm) {

    if (form.invalid) {

      Swal.fire({
        allowOutsideClick: false,
        title: 'Error!',
        text: 'Espere por favor...',
        icon: 'error',
        confirmButtonText: 'Ok'
      });

      // Swal.showLoading();

      return;
     } else {
    const {email, password} = this.usuario;
      this.authSvc.login(email, password);
        console.log(form.value);

    Swal.close();

    this.route.navigateByUrl('/home');
    }
  }
}
