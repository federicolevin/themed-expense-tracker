import { Injectable, signal, computed, effect } from '@angular/core';
import { THEMES, Theme, ThemeId } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'expense-tracker-theme';
  
  private currentThemeId = signal<ThemeId>(this.loadThemeFromStorage());
  
  // Computed properties for easy access
  currentTheme = computed(() => THEMES[this.currentThemeId()]);
  availableThemes = computed(() => Object.values(THEMES));
  
  constructor() {
    // Apply theme styles when theme changes
    effect(() => {
      this.applyThemeStyles(this.currentTheme());
    });
  }

  setTheme(themeId: ThemeId): void {
    this.currentThemeId.set(themeId);
    this.saveThemeToStorage(themeId);
  }

  private loadThemeFromStorage(): ThemeId {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored && stored in THEMES) {
        return stored as ThemeId;
      }
    } catch (error) {
      console.warn('Error loading theme from storage:', error);
    }
    return 'harry-potter'; // Default theme
  }

  private saveThemeToStorage(themeId: ThemeId): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, themeId);
    } catch (error) {
      console.warn('Error saving theme to storage:', error);
    }
  }

  private applyThemeStyles(theme: Theme): void {
    const root = document.documentElement;
    
    // Apply CSS custom properties
    root.style.setProperty('--theme-primary', theme.colors.primary);
    root.style.setProperty('--theme-secondary', theme.colors.secondary);
    root.style.setProperty('--theme-accent', theme.colors.accent);
    root.style.setProperty('--theme-background', theme.colors.background);
    root.style.setProperty('--theme-card-background', theme.colors.cardBackground);
    root.style.setProperty('--theme-text-primary', theme.colors.textPrimary);
    root.style.setProperty('--theme-text-secondary', theme.colors.textSecondary);
    root.style.setProperty('--theme-border', theme.colors.border);
    root.style.setProperty('--theme-success', theme.colors.success);
    root.style.setProperty('--theme-warning', theme.colors.warning);
    root.style.setProperty('--theme-danger', theme.colors.danger);
    root.style.setProperty('--theme-font-primary', theme.fonts.primary);
    root.style.setProperty('--theme-font-decorative', theme.fonts.decorative);
    
    // Apply theme-specific body class
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme.id}`);
    
    // Load theme-specific fonts
    this.loadThemeFonts(theme);
  }

  private loadThemeFonts(theme: Theme): void {
    // Remove existing theme font links
    const existingLinks = document.querySelectorAll('link[data-theme-font]');
    existingLinks.forEach(link => link.remove());
    
    // Load new theme fonts
    const fontUrls = this.getFontUrls(theme.id);
    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.setAttribute('data-theme-font', 'true');
      document.head.appendChild(link);
    });
  }

  private getFontUrls(themeId: ThemeId): string[] {
    const fontMap: Record<ThemeId, string[]> = {
      'harry-potter': [
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@700&display=swap'
      ],
      'star-wars': [
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap'
      ],
      'peppa-pig': [
        // Comic Sans MS is a system font, no need to load
      ],
      'simpsons': [
        // Trebuchet MS is a system font, no need to load
      ],
      'barbie': [
        'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap'
      ]
    };
    
    return fontMap[themeId] || [];
  }
}
