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

  constructor(private cryptoService: CryptoService) {
    cryptoService.getCryptos().subscribe((cryptos: any) => {
      console.log("IT FIXED ITSELF!!?");
      // cryptos is the object
      // cryptos.markets is the array of the markets
      console.log(cryptos.markets);
      const cryptoKeys = Object.keys(cryptos.markets[0]);
      const cryptoVals = Object.values(cryptos.markets[0]);
      
      cryptoKeys.forEach((el => {
        // console.log(el);
      }))
      // console.log(Object.keys(cryptos.markets[0]));
      // console.log(Object.values(cryptos.markets[0]));
    })    
  }
}
