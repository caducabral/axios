import {Component, ElementRef, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'visual-botao-principal',
  templateUrl: './botao-principal.component.html',
  styleUrls: ['./botao-principal.component.scss']
})
export class BotaoPrincipalComponent extends MatButton implements OnInit {

  constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor) {
    super(elementRef, _focusMonitor, 'teste');
  }

  ngOnInit(): void {
  }

}
