import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {

  private element: HTMLElement;
  private isSticky = false;
  private offsetTop = 0;


  private _getDocumentPosition(): number {
    const docEl = document.documentElement;
    const docRect = docEl.getBoundingClientRect();

    /* this should take care of different browsers */
    return -docRect.top || document.body.scrollTop || window.scrollY || docEl.scrollTop || 0;
  }

  private _makeSticky() {
    this.element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
    this.element.style.cssText += `box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
                                      -webkit-boxshadow: 1px 1px 2px rgba(0,0,0,0.5);`;
    this.element.style.top = '0px';
  }

  private _resetSticky() {
    this.element.style.position = '';
    this.element.style.top = '';
    this.element.style.boxShadow = '';
    this.element.style.webkitBoxShadow = '';
  }

  constructor(el: ElementRef) {

    this.element = el.nativeElement;
    this.offsetTop = this.element.offsetTop;
    fromEvent(document, 'scroll').subscribe(() => {
      const docTop = this._getDocumentPosition();
      const offset = this.offsetTop;

      if (docTop > offset && !this.isSticky) {
        this._makeSticky();
        this.isSticky = true;
      } else {
        if (docTop < offset && this.isSticky) {
          this._resetSticky();
          this.isSticky = false;
        }
      }
    });
  }

}
