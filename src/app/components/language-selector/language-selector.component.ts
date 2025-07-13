import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LanguageId } from '../../models/language.model';

@Component({
  selector: 'app-language-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  constructor(public languageService: LanguageService) {}

  selectLanguage(languageId: LanguageId) {
    this.languageService.setLanguage(languageId);
  }
}
