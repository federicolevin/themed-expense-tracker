import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { ThemeId } from '../models/theme.model';

@Component({
  selector: 'app-theme-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div class="theme-selector">
      <h3>🎨 Choose Your Theme</h3>
      <div class="theme-grid">
        @for (theme of themeService.availableThemes(); track theme.id) {
          <button
            class="theme-option"
            [class.active]="theme.id === themeService.currentTheme().id"
            (click)="selectTheme(theme.id)"
            [title]="'Switch to ' + theme.name + ' theme'"
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
      background: var(--theme-card-background, rgba(25, 25, 112, 0.95));
      border: 2px solid var(--theme-border, #8b4513);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 24px;
      position: relative;
    }

    h3 {
      margin: 0 0 16px 0;
      color: var(--theme-primary, #ffd700);
      font-size: 1.2rem;
      font-weight: 600;
      font-family: var(--theme-font-decorative, 'Cinzel Decorative', serif);
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.4);
      text-align: center;
    }

    .theme-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px;
    }

    .theme-option {
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid var(--theme-border, #8b4513);
      border-radius: 10px;
      padding: 12px 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      font-family: var(--theme-font-primary, 'Cinzel', serif);
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
      border-color: var(--theme-primary, #ffd700);
    }

    .theme-option.active {
      border-color: var(--theme-primary, #ffd700);
      background: rgba(255, 215, 0, 0.2);
      box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
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
      border-color: var(--theme-primary, #ffd700);
      box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
    }

    .theme-emoji {
      font-size: 1.3rem;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .theme-name {
      color: var(--theme-text-primary, #f4f4f4);
      font-size: 0.85rem;
      font-weight: 600;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .theme-option.active .theme-name {
      color: var(--theme-primary, #ffd700);
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
