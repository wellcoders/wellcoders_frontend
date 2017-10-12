import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[dragElement]'
})
export class DragelementDirective {

  constructor(el: ElementRef, renderer: Renderer) {

    renderer.listen(el.nativeElement, 'dragover', (event) => {
      renderer.setElementClass(el.nativeElement, 'dragging', true);
    })

    renderer.listen(el.nativeElement, 'dragleave', (event) => {
      renderer.setElementClass(el.nativeElement, 'dragging', false);
    })

    renderer.listen(el.nativeElement, 'drop', (event) => {
      renderer.setElementClass(el.nativeElement, 'dragging', false);
    })
 }

}
