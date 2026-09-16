export type TransactionType = 'INCOME' | 'EXPENSE';

export type TransactionCategory =
  | 'Housing'
  | 'Food'
  | 'Transportation'
  | 'Utilities'
  | 'Entertainment'
  | 'Salary'
  | 'Freelance'
  | 'Investments';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  date: string; // ISO string format: YYYY-MM-DD
  merchant?: string;
}