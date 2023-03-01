import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  empresa: any;

  mensaje = '';

  constructor() {
    this.empresa = {
      id: '',
      nombre: '',
      nit: '',
      fechaFundacion: '',
      direccion: ''
    }
  }

  empresas: any = [];

  ngOnInit(): void {
    this.empresas = localStorage.getItem('empresas') || [];
  }

  onSubmitEmpresa(){

    this.empresa.id = (Math.floor((Date.now() * Math.random()) / 100000));
    this.empresas.push(this.empresa);
    localStorage.setItem('empresa', this.empresas);
    this.mensaje = 'Se agrego una nueva empresa';

  }
  limpiar(){
    this.empresa = {
      id: '',
      nombre: '',
      nit: '',
      fechaFundacion: '',
      direccion: ''
    }
    this.mensaje = '';
  }

}
