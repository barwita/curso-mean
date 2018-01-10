import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'parque',
    templateUrl: './parque.template.html',
    styleUrls:['./parque.styles.css']
})
export class ParqueComponent{
    public titulo:string;
    @Input() nombre:string;
    @Output() pasarDatos = new EventEmitter();
    public color:string;

    constructor(){
        this.titulo='parque';
        this.color='nregro';
    }

    emitirEvento(){
        this.pasarDatos.emit(this.color);
    }
}