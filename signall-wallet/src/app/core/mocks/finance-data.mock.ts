import { Transaction } from '../models/transaction.model';

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: 'tx-001',
        title: 'Monthly Salary',
        amount: 3200.00,
        type: 'INCOME',
        category: 'Salary',
        date: '2026-09-01',
        merchant: 'Tech Corp S.A.'
    },
    {
        id: 'tx-002',
        title: 'Apartment Rent',
        amount: 850.00,
        type: 'EXPENSE',
        category: 'Housing',
        date: '2026-09-02',
        merchant: 'Real Estate Management'
    },
    {
        id: 'tx-003',
        title: 'Supermarket Restock',
        amount: 142.60,
        type: 'EXPENSE',
        category: 'Food',
        date: '2026-09-05',
        merchant: 'Continente'
    },
    {
        id: 'tx-004',
        title: 'Web Design Project',
        amount: 650.00,
        type: 'INCOME',
        category: 'Freelance',
        date: '2026-09-07',
        merchant: 'Client Studio'
    },
    {
        id: 'tx-005',
        title: 'Electricity & Water Bill',
        amount: 98.40,
        type: 'EXPENSE',
        category: 'Utilities',
        date: '2026-09-08',
        merchant: 'EDP Commercial'
    },
    {
        id: 'tx-006',
        title: 'Dinner with Friends',
        amount: 64.50,
        type: 'EXPENSE',
        category: 'Entertainment',
        date: '2026-09-10',
        merchant: 'O Central Restaurant'
    },
    {
        id: 'tx-007',
        title: 'Fuel Top-up',
        amount: 55.00,
        type: 'EXPENSE',
        category: 'Transportation',
        date: '2026-09-11',
        merchant: 'Galp Station'
    }
];