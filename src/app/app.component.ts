// File TypeScript utama yang berisi logika aplikasi.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logger } from './logger.service';

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
  active = true; // Nilai awal
  count = 0

  // butuh fungsi service untuk di injecttable ke componentApp, melalui function contract
  constructor(private logger: Logger) {

  }

  // function
  hello(name ='string') { // parameternya diterima sebagai argument
    // alertnya bisa ambil dari property yang ada
    // alert(this.judul)

    alert(`Hallo ${name.toLocaleUpperCase()}`)
  }

  onEditClick() {
    this.active = !this.active; // Toggle nilai active
  }

  // event binding sesuai counternya
  increment() {
    this.logger.writeCount(this.count) // servicenya hanya mencatat data ke console
    this.count++
  }
}
