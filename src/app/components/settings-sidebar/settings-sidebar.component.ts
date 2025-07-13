import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-settings-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ThemeSelectorComponent, LanguageSelectorComponent],
  templateUrl: './settings-sidebar.component.html',
  styleUrl: './settings-sidebar.component.scss'
})
export class SettingsSidebarComponent {
  isOpen = signal(false);

  toggleSidebar() {
    this.isOpen.update(current => !current);
  }

  closeSidebar() {
    this.isOpen.set(false);
  }
}
