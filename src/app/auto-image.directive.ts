import { Directive, ElementRef, HostListener, Output, EventEmitter,OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';
import { async } from '@angular/core/testing';

@Directive({
  selector: '[appAutoImage]'
})
export class AutoImageDirective implements OnInit {

  @Output()
  dataUrlChange = new EventEmitter<String>();

  constructor( private element: ElementRef) {
    
  }

  async ngOnInit() {
    const result = await domtoimage.toPng(this.element.nativeElement);
    this.dataUrlChange.emit( result );
  }

   /*@HostListener('click', ['$event'])
   async onClick(event) {
     console.log('event:', event );

    const result = await domtoimage.toPng(this.element.nativeElement);
    this.dataUrlChange.emit( result );
  }*/
}
