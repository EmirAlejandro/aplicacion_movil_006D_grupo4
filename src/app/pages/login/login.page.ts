import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre:string='';
  password:string='';
  constructor(private router :Router) { }
  platos: Plato[]=[
    {direccion:'./../../../assets/img/6.jpg',descripcion:'rico'},
    {direccion:'./../../../assets/img/7.jpg',descripcion:'picante'},
    {direccion:'./../../../assets/img/8.jpg',descripcion:'no me gusta'},
    {direccion:'./../../../assets/img/2.jpg',descripcion:'vegetariano'},
    {direccion:'./../../../assets/img/6.jpg',descripcion:'muy malo'},
    {direccion:'./../../../assets/img/8.jpg',descripcion:'no lo comeria'},
    {direccion:'./../../../assets/img/4.jpg',descripcion:'a toda prueba'},
    {direccion:'./../../../assets/img/3.jpg',descripcion:'super rico'}
  ]
  ngOnInit() {
  }
  menu(){
    console.log("Usuario:"+this.nombre);
    console.log("Password:"+this.password);
    const data={
      'usuario':this.nombre,
      'pass':this.password
    };
    localStorage.setItem('usuario',JSON.stringify(data));
    this.router.navigate(['tab/menu']);
  };

  reg(){
    this.router.navigate(['registro']);
  }

  clave(){
    this.router.navigate(['clave']);
  }



}
interface Plato{
   direccion:string;
   descripcion:string;
}
