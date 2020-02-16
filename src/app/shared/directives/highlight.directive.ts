import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  // 这里方括号代表这是一个属性型指令
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // 给指令起个别名，让指令名和属性名一致，这样在dom中添加指令和设值可同时进行。
  @Input('appHighlight') highlightColor: string;
  // 默认颜色
  @Input() defaultColor: string;


  constructor(private el: ElementRef) {
  }

  // 触发事件时会调用这个方法
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
