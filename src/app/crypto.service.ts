import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) {
    this.getCryptos().subscribe((cryptos: any) => {
      console.log(cryptos);
      // planets.results.forEach((element: any) => console.log(element.name));
    });
   }

   getCryptos(): Observable<any> {
    const planetApiUrl = 'https://cryptingup.com/api/markets';
    return this.http.get(planetApiUrl);
  }
}
