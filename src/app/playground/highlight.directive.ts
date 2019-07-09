import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // @Input() highlightColor: string;
  @Input() appHighlight: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('leave');
  }

  private highlight(color: string, urlValue) {}
}
