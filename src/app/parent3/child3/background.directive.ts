import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.style.backgroundColor);
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('leave');
    this.highlight('peru');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
