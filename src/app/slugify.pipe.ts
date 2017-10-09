import { Pipe, PipeTransform } from '@angular/core';
import * as slug from 'slug';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  transform(text: string): string {
    return slug(text);
  }

}
