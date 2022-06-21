import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private initialBackgroundColor: string;

  constructor(private element: ElementRef) {
    this.initialBackgroundColor = element.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  highlight() {
    this.element.nativeElement.style.backgroundColor = "tan";
  }

  @HostListener('mouseleave')
  unHighlight() {
    this.element.nativeElement.style.backgroundColor = this.initialBackgroundColor;
  }
}
