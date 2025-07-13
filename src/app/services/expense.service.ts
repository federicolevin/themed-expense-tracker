import { Injectable, signal, computed } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses = signal<Expense[]>([]);

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
    
    this.expenses.update(expenses => [...expenses, newExpense]);
  }

  deleteExpense(id: string) {
    this.expenses.update(expenses => expenses.filter(expense => expense.id !== id));
  }

  updateExpense(id: string, updates: Partial<Omit<Expense, 'id'>>) {
    this.expenses.update(expenses =>
      expenses.map(expense =>
        expense.id === id ? { ...expense, ...updates } : expense
      )
    );
  }
}
