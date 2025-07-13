import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-expense-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent {
  private expenseService = inject(ExpenseService);
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  // Computed property for localized content
  content = computed(() => {
    const themeId = this.themeService.currentTheme().id;
    return this.languageService.getThemeTranslations(themeId);
  });

  expenses = this.expenseService.getExpenses();

  deleteExpense(id: string) {
    this.expenseService.deleteExpense(id);
  }

  clearAllExpenses() {
    if (confirm(this.content().clearAllConfirm)) {
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
