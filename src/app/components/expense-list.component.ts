import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="list-container magical-card">
      <div class="list-header">
        <h2>📋 Recent Magical Transactions</h2>
        <div class="header-actions">
          <span class="expense-count">{{ expenses().length }} transactions</span>
          @if (expenses().length > 0) {
            <button 
              class="clear-all-btn magical-button-danger"
              (click)="clearAllExpenses()"
              title="Clear all expenses"
            >
              🗑️ Clear All
            </button>
          }
        </div>
      </div>

      @if (expenses().length === 0) {
        <div class="empty-state">
          <div class="empty-icon">🦉</div>
          <p>No magical transactions recorded yet.</p>
          <p>Cast your first expense spell above to begin your ledger!</p>
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
                <div class="expense-amount">{{ expense.amount.toFixed(2) }}G</div>
                <div class="expense-date">{{ formatDate(expense.date) }}</div>
              </div>
              <button 
                class="delete-btn"
                (click)="deleteExpense(expense.id)"
                title="Banish this expense"
              >
                ⚡
              </button>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .list-container {
      padding: 28px;
      margin-bottom: 24px;
      position: relative;
      background: linear-gradient(135deg, rgba(25, 25, 112, 0.95), rgba(72, 61, 139, 0.95));
      border: 3px solid #8b4513;
      color: #f4f4f4;
    }

    .list-container::after {
      content: '📜';
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 1.5rem;
      opacity: 0.7;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    h2 {
      margin: 0;
      color: #ffd700;
      font-size: 1.6rem;
      font-weight: 700;
      font-family: 'Cinzel Decorative', serif;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }

    .expense-count {
      color: #e6e6fa;
      font-size: 0.95rem;
      font-weight: 600;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .magical-button-danger {
      background: linear-gradient(135deg, #8b0000, #dc143c);
      color: #fff;
      border: 2px solid #8b0000;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Cinzel', serif;
    }

    .magical-button-danger:hover {
      background: linear-gradient(135deg, #dc143c, #ff6347);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: #e6e6fa;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 16px;
      opacity: 0.7;
    }

    .empty-state p {
      margin: 12px 0;
      font-size: 1.1rem;
      font-style: italic;
    }

    .expense-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .expense-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border: 2px solid #8b4513;
      border-radius: 12px;
      transition: all 0.3s ease;
      position: relative;
      background: rgba(139, 69, 19, 0.1);
    }

    .expense-item:hover {
      border-color: #ffd700;
      box-shadow: 
        0 4px 20px rgba(255, 215, 0, 0.2),
        inset 0 1px 0 rgba(255, 215, 0, 0.1);
      transform: translateY(-2px);
    }

    .expense-main {
      flex: 1;
    }

    .expense-description {
      font-weight: 600;
      color: #f4f4f4;
      margin-bottom: 6px;
      font-size: 1.1rem;
    }

    .expense-category {
      font-size: 0.9rem;
      color: #ffd700;
      background: rgba(139, 69, 19, 0.4);
      padding: 4px 12px;
      border-radius: 15px;
      display: inline-block;
      border: 1px solid #8b4513;
      font-weight: 500;
    }

    .expense-details {
      text-align: right;
      margin-right: 48px;
    }

    .expense-amount {
      font-weight: 700;
      color: #ffd700;
      font-size: 1.2rem;
      margin-bottom: 6px;
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
      font-family: 'Cinzel', serif;
    }

    .expense-date {
      font-size: 0.9rem;
      color: #e6e6fa;
      font-weight: 500;
    }

    .delete-btn {
      position: absolute;
      right: 16px;
      background: linear-gradient(135deg, #8b0000, #dc143c);
      color: #ffd700;
      border: 2px solid #8b0000;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1rem;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      font-weight: bold;
    }

    .delete-btn:hover {
      background: linear-gradient(135deg, #dc143c, #ff6347);
      transform: scale(1.1) rotate(180deg);
      box-shadow: 0 0 15px rgba(220, 20, 60, 0.6);
    }

    @media (max-width: 768px) {
      .list-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .header-actions {
        align-self: stretch;
        justify-content: space-between;
      }

      .expense-item {
        flex-direction: column;
        align-items: flex-start;
        padding-right: 48px;
      }

      .expense-details {
        margin-right: 0;
        text-align: left;
        margin-top: 12px;
      }

      .delete-btn {
        top: 16px;
        right: 16px;
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
    if (confirm('🧙‍♂️ Are you sure you want to clear all magical transactions? This powerful spell cannot be undone! ⚡')) {
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
