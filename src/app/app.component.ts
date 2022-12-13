import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto_api';
  cryptoObj: Array<any> = [];
  flagArray: Array<any> = [];

  constructor(private cryptoService: CryptoService) {
    cryptoService.getCryptos().subscribe((cryptos: any) => {
      this.cryptoObj = cryptos.markets;
      cryptos.markets.forEach(((el: {price: any; symbol: any; }) => {
      }))
      console.log(this.cryptoObj);
    })    
  }

   expandDetails(i: number){
    this.flagArray[i] = !this.flagArray[i];
    console.log(this.flagArray);
  }
}
