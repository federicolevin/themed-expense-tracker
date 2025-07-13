import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { ThemeId } from '../../models/theme.model';

@Component({
  selector: 'app-theme-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
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
