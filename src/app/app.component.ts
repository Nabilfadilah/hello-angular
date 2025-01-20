// File TypeScript utama yang berisi logika aplikasi.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  // metedata
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // property
  title = 'Hello, World! nabil ganteng';
}
