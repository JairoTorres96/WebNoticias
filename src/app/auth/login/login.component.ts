import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {
  public canlogged = true;
  public msg:string = '';
  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authSvc:AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, password} = this.loginform.value;
    try {
      const user = await this.authSvc.login(email,password);
      if(user){
        this.router.navigate(["/home"]);
      }else{
        this.canlogged= false;
        this.msg ='No se pudo iniciar sesion valida tus credenciales.';
      }
    } catch (error) {
      
    }
    
  }
}
