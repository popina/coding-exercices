export type Transaction = {
    date: Date;
    amount: number;
    type: 'debit' | 'credit';
};

export const transactions: Transaction[] = [
    { date: new Date(2023, 4, 15), amount: 100.0, type: 'debit' },
    { date: new Date(2023, 4, 20), amount: 200.0, type: 'credit' },
    { date: new Date(2023, 5, 5), amount: 200.0, type: 'debit' },
    { date: new Date(2023, 5, 10), amount: 300.0, type: 'debit' },
    { date: new Date(2023, 5, 15), amount: 400.0, type: 'credit' },
    { date: new Date(2023, 6, 10), amount: 500.0, type: 'debit' },
    { date: new Date(2023, 6, 10), amount: 500.0, type: 'credit' },
    { date: new Date(2023, 6, 15), amount: 600.0, type: 'credit' },
];