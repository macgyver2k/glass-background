import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements OnInit {
  @Input()
  revealContext: any;

  @Input()
  revealBorder: any;

  constructor(private element: ElementRef) {}

  calculateDistance(rect, p) {
    var dx = Math.max(rect.min.x - p.x, 0, p.x - rect.max.x);
    var dy = Math.max(rect.min.y - p.y, 0, p.y - rect.max.y);
    return Math.sqrt(dx*dx + dy*dy);
  }

  ngOnInit(): void {
    const parent = this.revealContext;
    console.log('parent', this.revealContext);
    console.log('border', this.revealBorder);

    parent.addEventListener('mousemove', (event: MouseEvent) => {
      const width = 512;
      const half = width / 2;

      const bounds: DOMRect = this.element.nativeElement.getBoundingClientRect();

      const location = {
        x: event.clientX,
        y: event.clientY
      };

      const diff = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top
      };

      const pointer = {
        x: diff.x - half,
        y: diff.y - half,
      };

      const center = {
        x: bounds.left + bounds.width / 2,
        y: bounds.top + bounds.height / 2,
      }

      const distance2 = this.calculateDistance( {
        min: {
          x: bounds.left,
          y: bounds.top
        },
        max: {
          x: bounds.right,
          y: bounds.bottom
        }
      }, location );

      const nativeElement = this.element.nativeElement;
      nativeElement.style['background-position'] = pointer.x + 'px ' + pointer.y + 'px';

      const maxRevealDist = 100;
      const maxBorderDist = 96;

      nativeElement.style['opacity'] = Math.min( 0.2, 1 - Math.min( distance2, maxRevealDist) / maxRevealDist);
      this.revealBorder.style['opacity'] = 1 - Math.min( distance2, maxBorderDist) / maxBorderDist;
    });
  }

}

