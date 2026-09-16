import { Component, inject } from '@angular/core';
import { FinanceService } from '../../core/services/transaction-service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'feature-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private readonly financeService = inject(FinanceService);


  currentDate = new Date();
  expenses = this.financeService.totalExpense();
  income = this.financeService.totalIncome();
  balance = this.financeService.totalBalance();


}



