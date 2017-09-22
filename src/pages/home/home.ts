import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text;
  format;
  showmoney;
  money;
  phonenumber;

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }
  scan() {
    this.scanner.scan()
      .then(
      (result) => {
        this.text = result.text;
        this.format = result.format;
        // money
        this.showmoney = result.text.substr(63);
        this.money = this.showmoney.slice(0, -15) + 'บาท';
        // phone
        this.phonenumber = '+' + result.text.substr(42, 11);
      }
      , (error) => { }
      );

  }

}
