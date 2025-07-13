import { Component, ChangeDetectionStrategy, inject, computed, effect } from '@angular/core';
import { ExpenseFormComponent } from './components/expense-form.component';
import { ExpenseListComponent } from './components/expense-list.component';
import { ExpenseDashboardComponent } from './components/expense-dashboard.component';
import { SettingsSidebarComponent } from './components/settings-sidebar.component';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ExpenseFormComponent, 
    ExpenseListComponent, 
    ExpenseDashboardComponent, 
    SettingsSidebarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  // Computed property for localized content
  content = computed(() => {
    const themeId = this.themeService.currentTheme().id;
    return this.languageService.getThemeTranslations(themeId);
  });

  constructor() {
    // Update document title when theme or language changes
    effect(() => {
      document.title = this.content().appTitle;
    });
  }
}
