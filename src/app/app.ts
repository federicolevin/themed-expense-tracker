import { Component, ChangeDetectionStrategy, inject, computed, effect } from '@angular/core';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseDashboardComponent } from './components/expense-dashboard/expense-dashboard.component';
import { SettingsSidebarComponent } from './components/settings-sidebar/settings-sidebar.component';
import { TourOverlayComponent } from './components/tour-overlay/tour-overlay.component';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';
import { TourService } from './services/tour.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ExpenseFormComponent, 
    ExpenseListComponent, 
    ExpenseDashboardComponent, 
    SettingsSidebarComponent,
    TourOverlayComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
  tourService = inject(TourService);

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

    // Start tour automatically for first-time users
    effect(() => {
      // Wait a bit for the app to fully load
      setTimeout(() => {
        if (!this.tourService.hasSeenTour()) {
          this.tourService.startTour();
        }
      }, 1000);
    }, { allowSignalWrites: true });
  }
}
