import {Component, Directive, ElementRef, OnInit, Renderer2} from "@angular/core";
import {MatButton} from "@angular/material/button";
import { Platform}    from "@angular/cdk/platform";
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'lib-visual',
  templateUrl: 'visual.component.html',
  styleUrls: [
    'visual.component.scss'
  ]
})
export class VisualComponent extends MatButton implements OnInit {

  constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor) {
    super(elementRef, _focusMonitor, 'teste');
  }

  ngOnInit(): void {
  }

}
