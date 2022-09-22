import {Observable} from 'rxjs';
import {
  CurrencyPaginatorWebEntity
} from "../../data/repository/currency-paginator-web-repository/currency-paginator-web-entity";

export abstract class CurrencyRepository {
  abstract getAllCurrency(): Observable<CurrencyPaginatorWebEntity>;
}
