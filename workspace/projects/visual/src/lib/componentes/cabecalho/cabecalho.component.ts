import {Component, ElementRef, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'visual-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: [
    'cabecalho.components.scss'
  ]
})
export class CabecalhoComponent extends MatToolbar implements OnInit {

  constructor(
    elementRef: ElementRef,
    _platform: Platform
  ) {
    super(elementRef, _platform);
  }

  ngOnInit(): void {
  }

}
