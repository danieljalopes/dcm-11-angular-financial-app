import { Component, input } from '@angular/core';
import { Transaction } from '../../core/models/transaction.model';
import { CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'feature-transactions-table',

  templateUrl: './transactions-table.html',
})
export class TransactionsTable {
  transactions = input<Transaction[]>([]);

}