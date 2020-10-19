import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user: any;

  constructor(private authSvc: AuthService, private route: Router) {}

  async ngOnInit() {
    console.log('Navbar');
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
      console.log('User->', this.user);
    }
  }

  onLogout() {
    this.authSvc.logout();
    this.route.navigateByUrl('/login');
  }
}
