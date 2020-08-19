import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService],
})
export class NavbarComponent implements OnInit {
  public islogged = false;
  public user: any;
  constructor(private authSvc: AuthService,private router: Router) { }

  async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    if (this.user){
      this.islogged = true;
    }
  }

  OnLogout(){
    this.authSvc.logout();
    this.router.navigate(["/login"]);
  }

}
