import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expense.service';
import { ThemeService } from '../services/theme.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-expense-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="dashboard magical-card">
      <div class="dashboard-header">
        <h2>{{ content().dashboardTitle }}</h2>
      </div>

      <div class="stats-grid">
        <div class="stat-card total">
          <div class="stat-icon">💰</div>
          <div class="stat-label">Total Money Spent</div>
          <div class="stat-value">{{ totalExpenses().toFixed(2) }}{{ themeService.currentTheme().currency }}</div>
        </div>

        <div class="stat-card count">
          <div class="stat-icon">📜</div>
          <div class="stat-label">Total Transactions</div>
          <div class="stat-value">{{ expenses().length }}</div>
        </div>

        @if (expenses().length > 0) {
          <div class="stat-card average">
            <div class="stat-icon">⚡</div>
            <div class="stat-label">Average per Transaction</div>
            <div class="stat-value">{{ getAverageExpense().toFixed(2) }}{{ themeService.currentTheme().currency }}</div>
          </div>
        }
      </div>

      @if (getCategoriesSorted().length > 0) {
        <div class="categories-section">
          <h3>🏪 Expenses by Category</h3>
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
                <div class="category-amount">{{ item.amount.toFixed(2) }}{{ themeService.currentTheme().currency }}</div>
              </div>
            }
          </div>
        </div>
      }

      @if (recentExpenses().length > 0) {
        <div class="recent-section">
          <h3>🕰️ Recent Transactions</h3>
          <div class="recent-list">
            @for (expense of recentExpenses(); track expense.id) {
              <div class="recent-item">
                <div class="recent-description">{{ expense.description }}</div>
                <div class="recent-amount">{{ expense.amount.toFixed(2) }}{{ themeService.currentTheme().currency }}</div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 28px;
      margin-bottom: 24px;
      position: relative;
      background: var(--theme-card-background);
      border: 3px solid var(--theme-border);
      color: var(--theme-text-primary);
    }

    .dashboard::after {
      content: '🐉';
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 1.8rem;
      opacity: 0.6;
    }

    .dashboard-header h2 {
      margin: 0 0 28px 0;
      color: var(--theme-primary);
      font-size: 1.6rem;
      font-weight: 700;
      font-family: var(--theme-font-decorative);
      text-shadow: 0 0 10px var(--theme-primary);
      text-align: center;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 36px;
    }

    .stat-card {
      padding: 24px;
      border-radius: 12px;
      text-align: center;
      border: 2px solid var(--theme-border);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 30%, var(--theme-primary) 50%, transparent 70%);
      opacity: 0.1;
      transform: translateX(-100%);
      transition: transform 0.6s;
    }

    .stat-card:hover::before {
      transform: translateX(100%);
    }

    .stat-card.total {
      background: linear-gradient(135deg, #8b0000, #b22222);
      color: #ffd700;
      border-color: #ffd700;
    }

    .stat-card.count {
      background: linear-gradient(135deg, #006400, #228b22);
      color: #f0f8ff;
      border-color: #90ee90;
    }

    .stat-card.average {
      background: linear-gradient(135deg, #4b0082, #8a2be2);
      color: #fff8dc;
      border-color: #dda0dd;
    }

    .stat-icon {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 0.95rem;
      opacity: 0.9;
      margin-bottom: 12px;
      font-weight: 600;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      font-family: 'Cinzel', serif;
      text-shadow: 0 0 10px currentColor;
    }

    .categories-section,
    .recent-section {
      margin-bottom: 28px;
    }

    h3 {
      margin: 0 0 20px 0;
      color: #ffd700;
      font-size: 1.3rem;
      font-weight: 600;
      font-family: 'Cinzel Decorative', serif;
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.4);
    }

    .category-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .category-item {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 16px;
      align-items: center;
      background: rgba(139, 69, 19, 0.2);
      padding: 16px;
      border-radius: 10px;
      border: 1px solid #8b4513;
    }

    .category-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }

    .category-name {
      font-weight: 600;
      color: #f4f4f4;
      font-size: 1rem;
    }

    .category-percentage {
      font-size: 0.9rem;
      color: #ffd700;
      font-weight: 700;
    }

    .category-bar {
      background: rgba(25, 25, 112, 0.6);
      height: 10px;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 6px;
      border: 1px solid #8b4513;
    }

    .category-fill {
      height: 100%;
      background: linear-gradient(90deg, #ffd700, #daa520);
      border-radius: 5px;
      transition: width 0.8s ease;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
    }

    .category-amount {
      font-weight: 700;
      color: #ffd700;
      text-align: right;
      grid-row: 1 / 3;
      font-size: 1.1rem;
      text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
    }

    .recent-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .recent-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: rgba(139, 69, 19, 0.2);
      border-radius: 8px;
      border: 1px solid #8b4513;
      transition: all 0.2s ease;
    }

    .recent-item:hover {
      background: rgba(139, 69, 19, 0.3);
      transform: translateY(-1px);
    }

    .recent-description {
      color: #f4f4f4;
      font-weight: 500;
    }

    .recent-amount {
      color: #ffd700;
      font-weight: 700;
      text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
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
        margin-top: 8px;
      }
    }
  `]
})
export class ExpenseDashboardComponent {
  private expenseService = inject(ExpenseService);
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  // Computed property for localized content
  content = computed(() => {
    const themeId = this.themeService.currentTheme().id;
    return this.languageService.getThemeTranslations(themeId);
  });

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
