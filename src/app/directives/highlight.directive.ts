import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    console.log(el)
    el.nativeElement.style.backgroundColor='aqua'
  }

}
//ElemntRef - dom nte oro element fetch chaiyan
//selectd tags kitune nativeElemt use chaiythitta