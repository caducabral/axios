import { NgModule } from '@angular/core';
import { VisualComponent } from './visual.component';
import {MatButtonModule} from "@angular/material/button";
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BotaoPrincipalComponent } from './componentes/botao-principal/botao-principal.component';

@NgModule({
  declarations: [
    VisualComponent,
    CabecalhoComponent,
    BotaoPrincipalComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    VisualComponent,
    CabecalhoComponent,
    BotaoPrincipalComponent
  ]
})
export class VisualModule { }
