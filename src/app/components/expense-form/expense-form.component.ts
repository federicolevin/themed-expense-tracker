import { Component, inject, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-expense-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})
export class ExpenseFormComponent {
  private fb = inject(FormBuilder);
  private expenseService = inject(ExpenseService);
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  // Computed property for localized content
  content = computed(() => {
    const themeId = this.themeService.currentTheme().id;
    return this.languageService.getThemeTranslations(themeId);
  });

  isSubmitting = signal(false);

  expenseForm = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(2)]],
    amount: [null, [Validators.required, Validators.min(0.01)]],
    category: ['', Validators.required],
    date: [new Date().toISOString().split('T')[0], Validators.required]
  });

  get descriptionControl() {
    return this.expenseForm.get('description')!;
  }

  get amountControl() {
    return this.expenseForm.get('amount')!;
  }

  get categoryControl() {
    return this.expenseForm.get('category')!;
  }

  get dateControl() {
    return this.expenseForm.get('date')!;
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      this.isSubmitting.set(true);

      const formValue = this.expenseForm.value;
      
      this.expenseService.addExpense({
        description: formValue.description!,
        amount: Number(formValue.amount!),
        category: formValue.category!,
        date: new Date(formValue.date!)
      });

      this.expenseForm.reset({
        date: new Date().toISOString().split('T')[0]
      });
      
      this.isSubmitting.set(false);
    }
  }
}
