import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ExpenseFormComponent } from './components/expense-form.component';
import { ExpenseListComponent } from './components/expense-list.component';
import { ExpenseDashboardComponent } from './components/expense-dashboard.component';
import { ThemeSelectorComponent } from './components/theme-selector.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpenseFormComponent, ExpenseListComponent, ExpenseDashboardComponent, ThemeSelectorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Personal Expense Tracker';
  themeService = inject(ThemeService);
}
