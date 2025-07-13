import { Injectable, signal, computed, inject } from '@angular/core';
import { LanguageService } from './language.service';
import { ThemeService } from './theme.service';

export interface TourStep {
  id: string;
  target: string; // CSS selector
  title: string;
  description: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  private _isActive = signal(false);
  private _currentStep = signal(0);
  private _hasSeenTour = signal(false);

  readonly isActive = this._isActive.asReadonly();
  readonly currentStep = this._currentStep.asReadonly();
  readonly hasSeenTour = this._hasSeenTour.asReadonly();

  // Tour steps computed based on current language and theme
  readonly tourSteps = computed((): TourStep[] => {
    const content = this.languageService.getThemeTranslations(this.themeService.currentTheme().id);

    return [
      {
        id: 'welcome',
        target: '.app-header',
        title: content.tour.welcome.title,
        description: content.tour.welcome.description,
        position: 'bottom',
        icon: '🎉'
      },
      {
        id: 'settings',
        target: 'app-settings-sidebar',
        title: content.tour.settings.title,
        description: content.tour.settings.description,
        position: 'right',
        icon: '⚙️'
      },
      {
        id: 'form',
        target: '.form-section',
        title: content.tour.form.title,
        description: content.tour.form.description,
        position: 'right',
        icon: '📝'
      },
      {
        id: 'dashboard',
        target: '.dashboard-section',
        title: content.tour.dashboard.title,
        description: content.tour.dashboard.description,
        position: 'left',
        icon: '📊'
      },
      {
        id: 'list',
        target: '.list-section',
        title: content.tour.list.title,
        description: content.tour.list.description,
        position: 'top',
        icon: '📋'
      },
      {
        id: 'finish',
        target: '.app-container',
        title: content.tour.finish.title,
        description: content.tour.finish.description,
        position: 'bottom',
        icon: '🚀'
      }
    ];
  });

  readonly currentTourStep = computed(() => {
    const steps = this.tourSteps();
    const stepIndex = this._currentStep();
    return stepIndex < steps.length ? steps[stepIndex] : null;
  });

  readonly isLastStep = computed(() => {
    return this._currentStep() >= this.tourSteps().length - 1;
  });

  readonly isFirstStep = computed(() => {
    return this._currentStep() === 0;
  });

  readonly tourButtons = computed(() => {
    const content = this.languageService.getThemeTranslations(this.themeService.currentTheme().id);
    return content.tour.buttons;
  });

  constructor() {
    // Check if user has seen the tour before
    const hasSeenTour = localStorage.getItem('expense-tracker-tour-completed');
    this._hasSeenTour.set(hasSeenTour === 'true');
  }

  startTour(): void {
    this._isActive.set(true);
    this._currentStep.set(0);
  }

  nextStep(): void {
    if (!this.isLastStep()) {
      this._currentStep.update(step => step + 1);
    } else {
      this.completeTour();
    }
  }

  previousStep(): void {
    if (!this.isFirstStep()) {
      this._currentStep.update(step => step - 1);
    }
  }

  skipTour(): void {
    this.completeTour();
  }

  completeTour(): void {
    this._isActive.set(false);
    this._hasSeenTour.set(true);
    localStorage.setItem('expense-tracker-tour-completed', 'true');
  }

  resetTour(): void {
    this._hasSeenTour.set(false);
    localStorage.removeItem('expense-tracker-tour-completed');
  }

  goToStep(stepIndex: number): void {
    if (stepIndex >= 0 && stepIndex < this.tourSteps().length) {
      this._currentStep.set(stepIndex);
    }
  }
}
