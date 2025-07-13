import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { LanguageService } from '../services/language.service';
import { ThemeId } from '../models/theme.model';

@Component({
  selector: 'app-theme-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="theme-selector">
      <h3 class="selector-title">{{ languageService.getUITranslations().themeSelector.title }}</h3>
      <div class="theme-grid">
        @for (theme of themeService.availableThemes(); track theme.id) {
          <button
            class="theme-option"
            [class.active]="theme.id === themeService.currentTheme().id"
            (click)="selectTheme(theme.id)"
            [title]="languageService.getUITranslations().themeSelector.tooltip"
          >
            <div class="theme-preview" [style]="getThemePreviewStyle(theme.id)">
              <span class="theme-emoji">{{ theme.emoji }}</span>
            </div>
            <span class="theme-name">{{ theme.name }}</span>
          </button>
        }
      </div>
    </div>
  `,
  styles: [`
    .theme-selector {
      background: var(--theme-card-background);
      border: 2px solid var(--theme-border);
      border-radius: 15px;
      padding: 20px;
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
    }

    .theme-selector::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--theme-primary), var(--theme-accent), var(--theme-secondary), var(--theme-primary));
      border-radius: 15px;
      z-index: -1;
      animation: borderGlow 3s linear infinite;
      background-size: 400% 400%;
    }

    @keyframes borderGlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .selector-title {
      color: var(--theme-primary);
      font-family: var(--theme-font-decorative);
      font-size: 1.5rem;
      margin-bottom: 16px;
      text-align: center;
      text-shadow: 0 0 10px var(--theme-primary);
      font-weight: 700;
    }

    .theme-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px;
    }

    .theme-option {
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid var(--theme-border);
      border-radius: 10px;
      padding: 12px 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      font-family: var(--theme-font-primary);
      position: relative;
      overflow: hidden;
    }

    .theme-option::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
      transform: translateX(-100%);
      transition: transform 0.6s;
    }

    .theme-option:hover::before {
      transform: translateX(100%);
    }

    .theme-option:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      border-color: var(--theme-primary);
    }

    .theme-option.active {
      border-color: var(--theme-primary);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 0 15px var(--theme-primary);
      transform: scale(1.05);
    }

    .theme-preview {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }

    .theme-option.active .theme-preview {
      border-color: var(--theme-primary);
      box-shadow: 0 0 8px var(--theme-primary);
    }

    .theme-emoji {
      font-size: 1.3rem;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .theme-name {
      color: var(--theme-text-primary);
      font-size: 0.85rem;
      font-weight: 600;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .theme-option.active .theme-name {
      color: var(--theme-primary);
    }

    @media (max-width: 768px) {
      .theme-grid {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        gap: 10px;
      }

      .theme-option {
        padding: 10px 6px;
      }

      .theme-preview {
        width: 35px;
        height: 35px;
      }

      .theme-emoji {
        font-size: 1.1rem;
      }

      .theme-name {
        font-size: 0.75rem;
      }
    }
  `]
})
export class ThemeSelectorComponent {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  selectTheme(themeId: ThemeId): void {
    this.themeService.setTheme(themeId);
  }

  getThemePreviewStyle(themeId: ThemeId): string {
    const colorMap: Record<ThemeId, string> = {
      'harry-potter': 'background: linear-gradient(135deg, #191970, #483d8b)',
      'star-wars': 'background: linear-gradient(135deg, #000814, #001d3d)',
      'peppa-pig': 'background: linear-gradient(135deg, #ffc0cb, #ffb6c1)',
      'simpsons': 'background: linear-gradient(135deg, #ffff00, #ffd700)',
      'barbie': 'background: linear-gradient(135deg, #ff1493, #ff69b4)'
    };
    
    return colorMap[themeId] || '';
  }
}
