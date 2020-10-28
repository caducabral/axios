import { Component } from '@angular/core';

@Component({
  selector: 'axios-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-axios';

  testar() {
    console.log('CLicado');
  }
}
