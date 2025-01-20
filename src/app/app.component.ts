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
  judul = "Projek Angular Pertama"
  title = 'Hello, World! nabil ganteng'
  nama_gambar = 'assets/mouse1.jpg'
  active = true

  // function
  hello(name ='string') { // parameternya diterima sebagai argument
    // alertnya bisa ambil dari property yang ada
    // alert(this.judul)

    alert(`Hallo ${name.toLocaleUpperCase()}`)
  }
}
