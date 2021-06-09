import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { porcentajePipe } from '../pipes/porcentaje';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
		this.componenteVenta = 'DevuelveDetalle';
	}

  @Input() componenteVenta: any;

	@Output() btnEvent = new EventEmitter<any>();
  

  devolverDetalle() {
		this.btnEvent.emit(this.componenteVenta.precio=((this.componenteVenta.precio) * 10));
	}

}
