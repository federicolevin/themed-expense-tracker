import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../services/tour.service';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-tour-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="tour-button-container">
      <button class="tour-button" 
              (click)="startTour()"
              [title]="buttonText">
        <span class="tour-button__icon">🎓</span>
        <span class="tour-button__text">{{ buttonText }}</span>
      </button>
      
      @if (!tourService.hasSeenTour()) {
        <div class="tour-button__badge">
          <span class="tour-button__badge-text">¡Nuevo!</span>
        </div>
      }
    </div>
  `,
  styleUrl: './tour-button.component.scss'
})
export class TourButtonComponent {
  tourService = inject(TourService);
  languageService = inject(LanguageService);
  themeService = inject(ThemeService);

  get buttonText(): string {
    const content = this.languageService.getThemeTranslations(this.themeService.currentTheme().id);
    return content.tour.buttons.startTour;
  }

  startTour(): void {
    this.tourService.startTour();
  }
}
