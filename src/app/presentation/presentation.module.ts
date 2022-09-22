import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyListComponent} from './currency-list/currency-list.component';
import {CoreModule} from "../core/core.module";
import {DataModuleModule} from "../data/data-module.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ExchangeTotalPipe } from './exchange-total.pipe';

@NgModule({
  declarations: [
    CurrencyListComponent,
    ExchangeTotalPipe,
  ],
  exports: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    DataModuleModule,
    ReactiveFormsModule
  ]
})
export class PresentationModule {
}
