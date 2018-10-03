import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  auth2: any;

  constructor(
    public router:Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  	init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if(this.email.length > 1 ){
      this.recuerdame = true;
    }

  }

  // Inicialización del plugin de Google Sign-in
  googleInit(){

    gapi.load('auth2', ()=>{
      
      this.auth2 = gapi.auth2.init({
        client_id: '1093893058549-jngoa805sm8h9l983qtc8smbht7k5uh0.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin(document.getElementById('btnGoogle'));

    });

  }

  attachSignin(element){

    this.auth2.attachClickHandler(element, {}, (googleUser) =>{

      // let profile = googleUser.getBasicProfile(); OBTENEMOS EL PROFILE DEL USUARIO, NO SE USA EN EL CURSO PERO VIENE MUY BIEN SABERLO
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle(token)
                          .subscribe( () => window.location.href = '#/dashboard');

      console.log(token);

    });

  }


  ingresar(forma: NgForm){
  	// this.router.navigate(['/dashboard'])

    if(forma.invalid){
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
                        .subscribe(correcto => this.router.navigate(['/dashboard']));

    console.log('El formulario es válido: ', forma.valid);
    console.log(forma.value);
    
  }

}
