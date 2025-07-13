import { Injectable, signal, computed, effect } from '@angular/core';
import { LANGUAGES, Language, LanguageId, ThemeKey } from '../models/language.model';
import { ThemeId } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'expense-tracker-language';
  
  private currentLanguageId = signal<LanguageId>(this.loadLanguageFromStorage());
  
  // Computed properties for easy access
  currentLanguage = computed(() => LANGUAGES[this.currentLanguageId()]);
  availableLanguages = computed(() => Object.values(LANGUAGES));
  
  constructor() {
    // Update HTML lang attribute when language changes
    effect(() => {
      document.documentElement.lang = this.currentLanguageId();
    });
  }

  setLanguage(languageId: LanguageId): void {
    this.currentLanguageId.set(languageId);
    this.saveLanguageToStorage(languageId);
  }

  // Helper method to get theme-specific translations
  getThemeTranslations(themeId: ThemeId) {
    const themeKey = this.getThemeKey(themeId);
    const translations = this.currentLanguage().translations;
    
    return {
      appTitle: translations.appTitle[themeKey],
      appSubtitle: translations.appSubtitle[themeKey],
      formTitle: translations.formTitle[themeKey],
      dashboardTitle: translations.dashboardTitle[themeKey],
      listTitle: translations.listTitle[themeKey],
      amountLabel: translations.amountLabel[themeKey],
      addButton: translations.addButton[themeKey],
      clearAllButton: translations.clearAllButton,
      clearAllConfirm: translations.clearAllConfirm[themeKey],
      deleteButton: translations.deleteButton,
      descriptionLabel: translations.descriptionLabel[themeKey],
      descriptionPlaceholder: translations.descriptionPlaceholder[themeKey],
      descriptionError: translations.descriptionError[themeKey],
      amountError: translations.amountError[themeKey],
      categoryLabel: translations.categoryLabel[themeKey],
      categoryPlaceholder: translations.categoryPlaceholder[themeKey],
      categoryError: translations.categoryError[themeKey],
      dateLabel: translations.dateLabel,
      dateError: translations.dateError,
      totalMoneySpent: translations.totalMoneySpent[themeKey],
      totalTransactions: translations.totalTransactions[themeKey],
      expensesByCategory: translations.expensesByCategory[themeKey],
      recentTransactions: translations.recentTransactions[themeKey],
      categories: translations.categories[themeKey]
    };
  }

  // Get UI translations (non-theme specific)
  getUITranslations() {
    return {
      languageSelector: this.currentLanguage().translations.languageSelector,
      themeSelector: this.currentLanguage().translations.themeSelector
    };
  }

  private loadLanguageFromStorage(): LanguageId {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored && stored in LANGUAGES) {
        return stored as LanguageId;
      }
    } catch (error) {
      console.warn('Error loading language from storage:', error);
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang in LANGUAGES) {
      return browserLang as LanguageId;
    }
    
    return 'en'; // Default language
  }

  private saveLanguageToStorage(languageId: LanguageId): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, languageId);
    } catch (error) {
      console.warn('Error saving language to storage:', error);
    }
  }

  private getThemeKey(themeId: ThemeId): ThemeKey {
    const themeKeyMap: Record<ThemeId, ThemeKey> = {
      'harry-potter': 'harryPotter',
      'star-wars': 'starWars',
      'peppa-pig': 'peppaPig',
      'simpsons': 'simpsons',
      'barbie': 'barbie'
    };
    
    return themeKeyMap[themeId];
  }
}
