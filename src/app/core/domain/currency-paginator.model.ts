import {CurrencyModel} from "./currency.model";

export type MappedCurrency = {
  [key: string]: CurrencyModel;
};

export interface CurrencyPaginatorModel {
  Date: string,
  PreviousDate: string,
  PreviousURL: string,
  Timestamp: string,
  Valute: MappedCurrency,

}
