import {Component} from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.template.html',
    styleUrls:['./tienda.styles.css']
})

export class TiendaComponent{
    public titulo:string;
    public nombreParque:string;
    public datoDesdeElParque:any;

    constructor(){
        this.titulo='tienda';
    }

    verDatosParque(event){
        console.log(event); 
        this.datoDesdeElParque=event;
    }
}