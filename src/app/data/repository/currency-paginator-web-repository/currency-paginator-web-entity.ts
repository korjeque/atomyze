import {CurrencyWebEntity} from "../currency-web-repository/currency-web-entity";

export interface CurrencyPaginatorWebEntity {
  date: string,
  previousDate: string,
  previousURL: string,
  timestamp: string,
  currencyList: CurrencyWebEntity[];
}
