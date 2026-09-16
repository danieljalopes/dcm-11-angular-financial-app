import { Injectable, signal, computed } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { MOCK_TRANSACTIONS } from '../mocks/finance-data.mock';

@Injectable({
    providedIn: 'root'
})
export class FinanceService {




    // Derived financial metrics calculated dynamically
    readonly totalIncome = computed(() =>
        MOCK_TRANSACTIONS
            .filter((tx) => tx.type === 'INCOME')
            .reduce((sum, tx) => sum + tx.amount, 0)
    );

    readonly totalExpense = computed(() =>
        MOCK_TRANSACTIONS
            .filter((tx) => tx.type === 'EXPENSE')
            .reduce((sum, tx) => sum + tx.amount, 0)
    );

    readonly totalBalance = computed(() => this.totalIncome() - this.totalExpense());

    readonly recentTransactions = computed(() =>
        [...MOCK_TRANSACTIONS]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5)
    );
}