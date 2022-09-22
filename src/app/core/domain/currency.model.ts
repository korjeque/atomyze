export type uuid = string | number;

export interface CurrencyModel {
  ID: uuid,
  NumCode: string,
  CharCode: string,
  Nominal: number,
  Name: string,
  Value: number,
  Previous: number
}

