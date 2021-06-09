import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'porcentajePipe' })
export class porcentajePipe implements PipeTransform {
    transform(value: number): any {
        const porcentaje = 0.10;
        if (!isNaN(value)){
            return value / porcentaje;
        }
        return null;
    }
}