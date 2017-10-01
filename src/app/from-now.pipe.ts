import * as moment from 'moment';
import 'moment/locale/es';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FromNow'
})
export class FromNowPipe implements PipeTransform {

    transform(postDate: number): string {
        return moment(postDate).fromNow();
    }

}
