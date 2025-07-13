import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <div class="dashboard-header">
        <h2>Expense Overview</h2>
      </div>

      <div class="stats-grid">
        <div class="stat-card total">
          <div class="stat-label">Total Expenses</div>
          <div class="stat-value">\${{ totalExpenses().toFixed(2) }}</div>
        </div>

        <div class="stat-card count">
          <div class="stat-label">Total Transactions</div>
          <div class="stat-value">{{ expenses().length }}</div>
        </div>

        @if (expenses().length > 0) {
          <div class="stat-card average">
            <div class="stat-label">Average per Transaction</div>
            <div class="stat-value">\${{ getAverageExpense().toFixed(2) }}</div>
          </div>
        }
      </div>

      @if (getCategoriesSorted().length > 0) {
        <div class="categories-section">
          <h3>Expenses by Category</h3>
          <div class="category-list">
            @for (item of getCategoriesSorted(); track item.category) {
              <div class="category-item">
                <div class="category-info">
                  <span class="category-name">{{ item.category }}</span>
                  <span class="category-percentage">{{ item.percentage.toFixed(1) }}%</span>
                </div>
                <div class="category-bar">
                  <div 
                    class="category-fill" 
                    [style.width.%]="item.percentage"
                  ></div>
                </div>
                <div class="category-amount">\${{ item.amount.toFixed(2) }}</div>
              </div>
            }
          </div>
        </div>
      }

      @if (recentExpenses().length > 0) {
        <div class="recent-section">
          <h3>Recent Expenses</h3>
          <div class="recent-list">
            @for (expense of recentExpenses(); track expense.id) {
              <div class="recent-item">
                <div class="recent-description">{{ expense.description }}</div>
                <div class="recent-amount">\${{ expense.amount.toFixed(2) }}</div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .dashboard {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }

    .dashboard-header h2 {
      margin: 0 0 24px 0;
      color: #2c3e50;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .stat-card {
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      border: 2px solid transparent;
      transition: all 0.2s ease;
    }

    .stat-card.total {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
    }

    .stat-card.count {
      background: linear-gradient(135deg, #2ecc71, #27ae60);
      color: white;
    }

    .stat-card.average {
      background: linear-gradient(135deg, #f39c12, #e67e22);
      color: white;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .stat-value {
      font-size: 1.8rem;
      font-weight: 700;
    }

    .categories-section,
    .recent-section {
      margin-bottom: 24px;
    }

    h3 {
      margin: 0 0 16px 0;
      color: #2c3e50;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .category-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .category-item {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      align-items: center;
    }

    .category-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }

    .category-name {
      font-weight: 500;
      color: #2c3e50;
    }

    .category-percentage {
      font-size: 0.85rem;
      color: #7f8c8d;
      font-weight: 600;
    }

    .category-bar {
      background: #ecf0f1;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 4px;
    }

    .category-fill {
      height: 100%;
      background: linear-gradient(90deg, #3498db, #2980b9);
      border-radius: 4px;
      transition: width 0.5s ease;
    }

    .category-amount {
      font-weight: 600;
      color: #e74c3c;
      text-align: right;
      grid-row: 1 / 3;
    }

    .recent-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .recent-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 6px;
    }

    .recent-description {
      color: #2c3e50;
      font-weight: 500;
    }

    .recent-amount {
      color: #e74c3c;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .category-item {
        grid-template-columns: 1fr;
      }

      .category-amount {
        grid-row: auto;
        text-align: left;
      }
    }
  `]
})
export class ExpenseDashboardComponent {
  private expenseService = inject(ExpenseService);

  expenses = this.expenseService.getExpenses();
  totalExpenses = this.expenseService.totalExpenses;
  expensesByCategory = this.expenseService.expensesByCategory;
  recentExpenses = this.expenseService.recentExpenses;

  getAverageExpense(): number {
    const total = this.totalExpenses();
    const count = this.expenses().length;
    return count > 0 ? total / count : 0;
  }

  getCategoriesSorted() {
    const categories = this.expensesByCategory();
    const total = this.totalExpenses();
    
    return Object.entries(categories)
      .map(([category, amount]) => ({
        category,
        amount,
        percentage: total > 0 ? (amount / total) * 100 : 0
      }))
      .sort((a, b) => b.amount - a.amount);
  }
}
