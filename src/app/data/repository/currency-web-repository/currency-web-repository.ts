import {Injectable} from '@angular/core';
import {CurrencyRepository} from "../../../core/repositories/currency.repository";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {
  CurrencyPaginatorWebRepositoryMapper
} from "../currency-paginator-web-repository/currency-paginator-web-repository-mapper";
import {CurrencyPaginatorWebEntity} from "../currency-paginator-web-repository/currency-paginator-web-entity";
import {CurrencyPaginatorModel} from "../../../core/domain/currency-paginator.model";

@Injectable({
  providedIn: 'root'
})
export class CurrencyWebRepository extends CurrencyRepository {

  private API_URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

  mapperPaginator = new CurrencyPaginatorWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getAllCurrency(): Observable<CurrencyPaginatorWebEntity> {
    return this.http
      .get<CurrencyPaginatorModel>(this.API_URL)
      .pipe(
        map(this.mapperPaginator.mapTo)
      );
  }
}
