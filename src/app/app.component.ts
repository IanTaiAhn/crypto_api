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
  public show0:boolean = false;
  flagArray: Array<any> = [];


  constructor(private cryptoService: CryptoService) {
    cryptoService.getCryptos().subscribe((cryptos: any) => {
      this.cryptoObj = cryptos.markets;
      cryptos.markets.forEach(((el: {price: any; symbol: any; }) => {
      }))
      console.log(this.cryptoObj);
    })    
  }

  toggle0() {
    this.show0 = !this.show0;
    console.log("event fired");
    // console.log(event.target);
    // return (event.target as unknown as HTMLInputElement["value"]);
   }

   iconChange(i: number){
    this.flagArray[i] = !this.flagArray[i];
    console.log(this.flagArray);
  }
}
