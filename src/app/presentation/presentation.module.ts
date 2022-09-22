import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyListComponent} from './currency-list/currency-list.component';
import {CoreModule} from "../core/core.module";
import {DataModuleModule} from "../data/data-module.module";

@NgModule({
  declarations: [
    CurrencyListComponent,
  ],
  exports: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    DataModuleModule
  ]
})
export class PresentationModule {
}
