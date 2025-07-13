import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <div class="list-header">
        <h2>Recent Expenses</h2>
        <div class="header-actions">
          <span class="expense-count">{{ expenses().length }} expenses</span>
          @if (expenses().length > 0) {
            <button 
              class="clear-all-btn"
              (click)="clearAllExpenses()"
              title="Clear all expenses"
            >
              Clear All
            </button>
          }
        </div>
      </div>

      @if (expenses().length === 0) {
        <div class="empty-state">
          <p>No expenses recorded yet.</p>
          <p>Add your first expense above to get started!</p>
        </div>
      } @else {
        <div class="expense-list">
          @for (expense of expenses(); track expense.id) {
            <div class="expense-item">
              <div class="expense-main">
                <div class="expense-description">{{ expense.description }}</div>
                <div class="expense-category">{{ expense.category }}</div>
              </div>
              <div class="expense-details">
                <div class="expense-amount">\${{ expense.amount.toFixed(2) }}</div>
                <div class="expense-date">{{ formatDate(expense.date) }}</div>
              </div>
              <button 
                class="delete-btn"
                (click)="deleteExpense(expense.id)"
                title="Delete expense"
              >
                ×
              </button>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .list-container {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    h2 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .expense-count {
      color: #7f8c8d;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .clear-all-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .clear-all-btn:hover {
      background: #c0392b;
      transform: translateY(-1px);
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #7f8c8d;
    }

    .empty-state p {
      margin: 8px 0;
    }

    .expense-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .expense-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border: 2px solid #ecf0f1;
      border-radius: 8px;
      transition: all 0.2s ease;
      position: relative;
    }

    .expense-item:hover {
      border-color: #d5dbdb;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .expense-main {
      flex: 1;
    }

    .expense-description {
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 4px;
    }

    .expense-category {
      font-size: 0.85rem;
      color: #7f8c8d;
      background: #ecf0f1;
      padding: 2px 8px;
      border-radius: 12px;
      display: inline-block;
    }

    .expense-details {
      text-align: right;
      margin-right: 40px;
    }

    .expense-amount {
      font-weight: 700;
      color: #e74c3c;
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    .expense-date {
      font-size: 0.85rem;
      color: #7f8c8d;
    }

    .delete-btn {
      position: absolute;
      right: 12px;
      background: #e74c3c;
      color: white;
      border: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.2rem;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .delete-btn:hover {
      background: #c0392b;
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .list-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .header-actions {
        align-self: stretch;
        justify-content: space-between;
      }

      .expense-item {
        flex-direction: column;
        align-items: flex-start;
        padding-right: 40px;
      }

      .expense-details {
        margin-right: 0;
        text-align: left;
        margin-top: 8px;
      }
    }
  `]
})
export class ExpenseListComponent {
  private expenseService = inject(ExpenseService);

  expenses = this.expenseService.getExpenses();

  deleteExpense(id: string) {
    this.expenseService.deleteExpense(id);
  }

  clearAllExpenses() {
    if (confirm('Are you sure you want to delete all expenses? This action cannot be undone.')) {
      this.expenseService.clearAllExpenses();
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
}
