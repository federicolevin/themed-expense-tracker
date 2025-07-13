import { Injectable, signal, computed } from '@angular/core';
import { Expense, CategoryKey } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private readonly STORAGE_KEY = 'expense-tracker-expenses';
  private expenses = signal<Expense[]>(this.loadExpensesFromStorage());

  // Computed values for dashboard
  totalExpenses = computed(() => 
    this.expenses().reduce((sum, expense) => sum + expense.amount, 0)
  );

  expensesByCategory = computed(() => {
    const expenses = this.expenses();
    return expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {} as Record<string, number>);
  });

  recentExpenses = computed(() => 
    [...this.expenses()]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
  );

  getExpenses() {
    return this.expenses.asReadonly();
  }

  addExpense(expense: Omit<Expense, 'id'>) {
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID()
    };
    
    this.expenses.update(expenses => {
      const updatedExpenses = [...expenses, newExpense];
      this.saveExpensesToStorage(updatedExpenses);
      return updatedExpenses;
    });
  }

  deleteExpense(id: string) {
    this.expenses.update(expenses => {
      const updatedExpenses = expenses.filter(expense => expense.id !== id);
      this.saveExpensesToStorage(updatedExpenses);
      return updatedExpenses;
    });
  }

  updateExpense(id: string, updates: Partial<Omit<Expense, 'id'>>) {
    this.expenses.update(expenses => {
      const updatedExpenses = expenses.map(expense =>
        expense.id === id ? { ...expense, ...updates } : expense
      );
      this.saveExpensesToStorage(updatedExpenses);
      return updatedExpenses;
    });
  }

  private loadExpensesFromStorage(): Expense[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Convert date strings back to Date objects and migrate old categories
        return parsed.map((expense: any) => ({
          ...expense,
          date: new Date(expense.date),
          category: this.migrateCategoryToKey(expense.category)
        }));
      }
    } catch (error) {
      console.warn('Error loading expenses from storage:', error);
    }
    return [];
  }

  private migrateCategoryToKey(category: any): CategoryKey {
    // If it's already a CategoryKey, return it
    if (Object.values(CategoryKey).includes(category)) {
      return category as CategoryKey;
    }
    
    // Map old string categories to keys
    const categoryMapping: Record<string, CategoryKey> = {
      // Food related
      '🍖 Food & Butterbeer': CategoryKey.FOOD,
      '🍖 Cantina & Food': CategoryKey.FOOD,
      '🍰 Snacks & Treats': CategoryKey.FOOD,
      '🍩 Food & Duff Beer': CategoryKey.FOOD,
      '💄 Beauty & Fashion': CategoryKey.FOOD,
      '🍖 Comida y Cerveza de Mantequilla': CategoryKey.FOOD,
      '🍖 Cantina y Comida': CategoryKey.FOOD,
      '🍰 Aperitivos y Golosinas': CategoryKey.FOOD,
      '🍩 Comida y Cerveza Duff': CategoryKey.FOOD,
      '💄 Belleza y Moda': CategoryKey.FOOD,
      
      // Transport related
      '🚂 Magical Transportation': CategoryKey.TRANSPORT,
      '🚀 Spaceship Transport': CategoryKey.TRANSPORT,
      '🚌 Transport Fun': CategoryKey.TRANSPORT,
      '🚗 Car & Transport': CategoryKey.TRANSPORT,
      '🚗 Pink Transportation': CategoryKey.TRANSPORT,
      '🚂 Transporte Mágico': CategoryKey.TRANSPORT,
      '🚀 Transporte de Nave Espacial': CategoryKey.TRANSPORT,
      '🚌 Transporte Divertido': CategoryKey.TRANSPORT,
      '🚗 Auto y Transporte': CategoryKey.TRANSPORT,
      '🚗 Transporte Rosa': CategoryKey.TRANSPORT,
      
      // Entertainment related
      '🎭 Entertainment & Quidditch': CategoryKey.ENTERTAINMENT,
      '🎮 Holonet Entertainment': CategoryKey.ENTERTAINMENT,
      '🎪 Fun Activities': CategoryKey.ENTERTAINMENT,
      '📺 Entertainment': CategoryKey.ENTERTAINMENT,
      '🎉 Fabulous Events': CategoryKey.ENTERTAINMENT,
      '🎭 Entretenimiento y Quidditch': CategoryKey.ENTERTAINMENT,
      '🎮 Entretenimiento Holonet': CategoryKey.ENTERTAINMENT,
      '🎪 Actividades Divertidas': CategoryKey.ENTERTAINMENT,
      '📺 Entretenimiento': CategoryKey.ENTERTAINMENT,
      '🎉 Eventos Fabulosos': CategoryKey.ENTERTAINMENT,
    };
    
    // Return mapped category or default to OTHER
    return categoryMapping[category] || CategoryKey.OTHER;
  }

  private saveExpensesToStorage(expenses: Expense[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
      console.warn('Error saving expenses to storage:', error);
    }
  }

  clearAllExpenses(): void {
    this.expenses.set([]);
    this.saveExpensesToStorage([]);
  }
}
