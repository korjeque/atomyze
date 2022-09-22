import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {CurrencyWebRepository} from "./repository/currency-web-repository/currency-web-repository";
import {CurrencyRepository} from "../core/repositories/currency.repository";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [{provide: CurrencyRepository, useClass: CurrencyWebRepository}],
})
export class DataModuleModule {
}
