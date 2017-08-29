import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WooCommerceProvider {

  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: "http://ionshop.getactive.sc",
      consumerKey: "ck_44ff961f2a857f710c176ef21e6ea217476af67e",
      consumerSecret: "cs_3fbf2ff5fffa5511009a9a77dd3221c09049d1d3"
    });
  }

  initialize(){
    return this.WooCommerce;
  }

}
