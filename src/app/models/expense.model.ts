export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: Date;
}

export const EXPENSE_CATEGORIES = [
  '🍖 Food & Butterbeer',
  '🚂 Magical Transportation',
  '📚 Books & Supplies',
  '🎭 Entertainment & Quidditch',
  '⚡ Magical Services',
  '🏥 Healing & Potions',
  '✈️ Magical Travel',
  '🎓 Magical Education',
  '🔮 Other Magical Items'
] as const;

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];
