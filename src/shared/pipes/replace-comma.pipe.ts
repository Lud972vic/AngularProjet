import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceCommaCustom'
})

export class ReplaceComma implements PipeTransform {
    transform(value: string): string {

        //!! n'est pas null ou undefined
        if (!!value) {
            return value.replace(/,/g, '.');
        } else {
            return '';
        }
    }

}