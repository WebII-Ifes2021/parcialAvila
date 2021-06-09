import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { porcentajePipe } from '../pipes/porcentaje';
import { VentaComponent } from '../ventaComponent/venta.component';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [porcentajePipe]
})
export class DetalleComponent implements OnInit {

  ventaForm: FormGroup;

  porcentajeFinal: number;

  //precioVenta = VentaComponent.arguments.precio;


  componenteDetalle : any;

  valorButton = '';

  constructor(private fb: FormBuilder,
     //private porcentajePipe
     ) {
    this.porcentajeFinal = 0;
  }
  

  initVentaForm() { //lo hago con un initForm
		this.ventaForm = this.fb.group({
			valorBtn: [ '', [ Validators.required ] ],
			 nombre: '',
			 producto: '',
			 //stereo: this.fb.group({
			 fechaCompra: '',
			 cantidad: '',
       precio: ''
		});
	}

  ngOnInit(): void {
   // this.porcentajeFinal = this.porcentajePipe.transform(this.precioVenta)
    this.initVentaForm();
  }

  setComponenteVenta(){
    this.componenteDetalle = this.ventaForm.value;

  }



  guardar() {
		debugger;
	  this.ventaForm.value;
    this.ventaForm.value.cantidad;

		this.valorButton = this.ventaForm.value.valorBtn;
	}

  

}
