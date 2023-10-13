import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  arreglo= [];
  arr=new Array();
  usuario:string='';
  constructor(private router :Router) { }

  ngOnInit() {
    var data = localStorage.getItem('usuario');
    console.log(data);
    if(data!=null){
      console.log("no es nulo");
      this.arreglo=JSON.parse(data);
      console.log(this.arreglo);
      this.arr.push(this.arreglo);
      this.arr.forEach(element => {
        console.log(element.usuario);
        this.usuario=element.usuario;
      });
      
    }

  }

  pagos(){
    this.router.navigate(['tab/pagos']);
  }

  actualizar(){
    this.router.navigate(['tab/actualizar']);
  }

  historial(){
    this.router.navigate(['tab/historial']);
  }

}
