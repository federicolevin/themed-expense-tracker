import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { CategoryKey } from '../../models/expense.model';

@Component({
  selector: 'app-expense-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './expense-dashboard.component.html',
  styleUrl: './expense-dashboard.component.scss'
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

  getCategoriesSorted() {
    const categories = this.expensesByCategory();
    const total = this.totalExpenses();
    const themeId = this.themeService.currentTheme().id;

    return Object.entries(categories)
      .map(([categoryKey, amount]) => ({
        category: categoryKey as CategoryKey,
        categoryName: this.languageService.getCategoryName(categoryKey as CategoryKey, themeId),
        amount,
        percentage: total > 0 ? (amount / total) * 100 : 0
      }))
      .sort((a, b) => b.amount - a.amount);
  }
}
