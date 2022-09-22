import {uuid} from "../../../core/domain/currency.model";

export interface CurrencyWebEntity {
  id: uuid;
  numCode: string;
  charCode: string;
  nominal: number;
  name: string;
  value: number;
  previosValue: number;
}
