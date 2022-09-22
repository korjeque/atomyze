import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {GetAllCurrencyUsecase} from "../../core/usecases/get-all-currency-usecase.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";
import {
  CurrencyPaginatorWebEntity
} from "../../data/repository/currency-paginator-web-repository/currency-paginator-web-entity";
import {CurrencyWebEntity} from "../../data/repository/currency-web-repository/currency-web-entity";
import {uuid} from "../../core/domain/currency.model";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent implements OnInit, OnDestroy {

  currencyPaginator$: Observable<CurrencyPaginatorWebEntity> = this.getAllCurrency.execute();
  currencyList: CurrencyWebEntity[] = [];

  destroyGet$ = new Subject<boolean>();
  destroyAutoComplete$ = new Subject<boolean>();

  public isEnabled = false;
  private interval: number = 10000;


  constructor(private getAllCurrency: GetAllCurrencyUsecase, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getCurrency();
  }

  getCurrency(): void {
    this.currencyPaginator$.pipe(
      takeUntil(this.destroyGet$),
    ).subscribe((paginator: CurrencyPaginatorWebEntity) => {
      this.currencyList = paginator.currencyList;
      this.cdr.markForCheck();
    });
  }

  updateCurrency() {
    this.getCurrency();
  }

  autoUpdateOn() {
    this.isEnabled = true;
    this.destroyAutoComplete$.next(false);
    interval(this.interval).pipe(
      tap(() => this.getCurrency()),
      takeUntil(this.destroyAutoComplete$),
    ).subscribe({
      complete: () => {
        this.isEnabled = false;
        this.cdr.markForCheck();
      }
    });
  }

  autoUpdateOff() {
    this.isEnabled = false;
    this.destroyAutoComplete$.next(true);
  }

  trackByFn(index: number, item: CurrencyWebEntity): uuid {
    return item.id;
  }

  ngOnDestroy() {
    this.destroyGet$.next(true);
    this.destroyGet$.complete();
    this.destroyAutoComplete$.next(true);
    this.destroyAutoComplete$.complete();
  }
}
