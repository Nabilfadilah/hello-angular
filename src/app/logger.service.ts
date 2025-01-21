// decolator
import { Injectable } from "@angular/core";

// service kelas yang bisa dibagikan
@Injectable({providedIn: 'root'})

export class Logger {
    writeCount(count: number) {
        console.log(count)
    }
}