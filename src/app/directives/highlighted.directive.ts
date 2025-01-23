import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted=false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { 

    console.log("Directive Created");

  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return false;
  // }

  // @HostBinding('style.border')
  // get cssClasses() {
  //   return '1px solid red';
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return "true";
  // }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    this.isHighlighted=true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted=false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
