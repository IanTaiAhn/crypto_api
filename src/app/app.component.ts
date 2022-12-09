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
    console.log(cryptoService.getCryptos);
  }
}
