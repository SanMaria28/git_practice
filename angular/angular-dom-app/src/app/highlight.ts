import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter')  
    onMouseEnter(){
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    }
     @HostListener('mouseleave')  
    onMouseLeave(){
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    }

}


