export enum CategoryKey {
  FOOD = 'food',
  TRANSPORT = 'transport',
  BOOKS_SUPPLIES = 'booksSupplies',
  ENTERTAINMENT = 'entertainment',
  SERVICES = 'services',
  HEALTH = 'health',
  TRAVEL = 'travel',
  EDUCATION = 'education',
  OTHER = 'other'
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: CategoryKey;
  date: Date;
}
