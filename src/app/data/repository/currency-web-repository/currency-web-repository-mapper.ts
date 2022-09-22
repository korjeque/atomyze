import {Mapper} from "../../../core/base/mapper";
import {CurrencyWebEntity} from "./currency-web-entity";
import {CurrencyModel } from "../../../core/domain/currency.model";

export class CurrencyWebRepositoryMapper extends Mapper <CurrencyWebEntity, CurrencyModel> {
  mapFrom(param: CurrencyWebEntity): CurrencyModel {
    return {
      ID: param.id,
      NumCode: param.numCode,
      CharCode: param.charCode,
      Nominal: param.nominal,
      Name: param.name,
      Value: param.value,
      Previous: param.previosValue,
    };
  }

  mapTo(param: CurrencyModel): CurrencyWebEntity {
    return {
      id: param.ID,
      numCode: param.NumCode,
      charCode: param.CharCode,
      nominal: param.Nominal,
      name: param.Name,
      value: param.Value,
      previosValue: param.Previous,
    };
  }
}
