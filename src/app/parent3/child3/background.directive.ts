import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  @Input() appBackground: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
    console.log(this.appBackground);
    this.highlight('yellow', 'assets/ic-brightness-on-hover.svg');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('leave');
    this.highlight('peru', 'assets/ic-brightness-off-hover.svg');
  }

  private highlight(color: string, urlValue) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.background = `url(${urlValue})`;
    this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.el.nativeElement.style.backgroundPosition = 'center';



  }
}


