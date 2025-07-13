import { Injectable, signal, computed } from '@angular/core';
import { Expense } from '../models/expense.model';

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
        // Convert date strings back to Date objects
        return parsed.map((expense: any) => ({
          ...expense,
          date: new Date(expense.date)
        }));
      }
    } catch (error) {
      console.warn('Error loading expenses from storage:', error);
    }
    return [];
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
