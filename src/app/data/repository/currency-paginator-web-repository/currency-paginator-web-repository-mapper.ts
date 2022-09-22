import {Mapper} from "../../../core/base/mapper";
import {CurrencyPaginatorWebEntity} from "./currency-paginator-web-entity";
import {CurrencyPaginatorModel, MappedCurrency} from "../../../core/domain/currency-paginator.model";
import {CurrencyWebEntity} from "../currency-web-repository/currency-web-entity";
import {CurrencyWebRepositoryMapper} from "../currency-web-repository/currency-web-repository-mapper";

export class CurrencyPaginatorWebRepositoryMapper extends Mapper <CurrencyPaginatorWebEntity, CurrencyPaginatorModel> {

  mapperEntity = new CurrencyWebRepositoryMapper();

  mapFrom(param: CurrencyPaginatorWebEntity): CurrencyPaginatorModel {
    let valute: MappedCurrency = {};
    param.currencyList.forEach((currency: CurrencyWebEntity) => {
      valute[currency.charCode] = this.mapperEntity.mapFrom(currency);
    });

    return {
      Date: param.date,
      PreviousDate: param.previousDate,
      PreviousURL: param.previousURL,
      Timestamp: param.timestamp,
      Valute: valute,
    };
  }

  mapTo(param: CurrencyPaginatorModel): CurrencyPaginatorWebEntity {
    const currencyList: CurrencyWebEntity[] = [];
    const mapperEntity = new CurrencyWebRepositoryMapper()
    for (let key in param.Valute) {
      const currencyModel = param.Valute[key];
      const currencyEntity = mapperEntity.mapTo(currencyModel);
      currencyList.push(currencyEntity);
    }
    return {
      date: param.Date,
      previousDate: param.PreviousDate,
      previousURL: param.PreviousURL,
      timestamp: param.Timestamp,
      currencyList,
    };
  }
}
