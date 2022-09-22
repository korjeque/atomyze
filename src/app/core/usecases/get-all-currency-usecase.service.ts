import {Injectable} from '@angular/core';
import {UseCase} from "../base/use-case";
import {CurrencyRepository} from "../repositories/currency.repository";
import {Observable} from "rxjs";
import {
  CurrencyPaginatorWebEntity
} from "../../data/repository/currency-paginator-web-repository/currency-paginator-web-entity";

@Injectable({
  providedIn: 'root',
})
export class GetAllCurrencyUsecase implements UseCase<void, CurrencyPaginatorWebEntity>{

  constructor(private currencyRepository: CurrencyRepository) { }

  execute(): Observable<CurrencyPaginatorWebEntity> {
    return this.currencyRepository.getAllCurrency();
  }
}
