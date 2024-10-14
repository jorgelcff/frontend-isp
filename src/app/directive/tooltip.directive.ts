import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

import { MatTableModule } from '@angular/material/table';

import { MatTooltipModule } from '@angular/material/tooltip';

@Directive({
  selector: '[matTooltipHtml]',
  standalone: true,
})
export class TooltipHtmlDirective implements OnChanges {
  @Input('matTooltipHtml') tooltipHtml: string | undefined;

  constructor(private matTooltip: MatTooltip, private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tooltipHtml']) {
      this.matTooltip.message = this.tooltipHtml;
      this.matTooltip.show();
    }
  }
}
