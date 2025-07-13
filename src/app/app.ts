import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ExpenseFormComponent } from './components/expense-form.component';
import { ExpenseListComponent } from './components/expense-list.component';
import { ExpenseDashboardComponent } from './components/expense-dashboard.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExpenseFormComponent, ExpenseListComponent, ExpenseDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Personal Expense Tracker';
}
