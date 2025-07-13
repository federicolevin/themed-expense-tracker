import { Component, inject, signal, ChangeDetectionStrategy, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expense.service';
import { ThemeService } from '../services/theme.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-expense-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="form-container magical-card">
      <h2>{{ content().formTitle }}</h2>
      <form [formGroup]="expenseForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="description">{{ content().descriptionLabel }}</label>
          <input
            id="description"
            type="text"
            formControlName="description"
            [placeholder]="content().descriptionPlaceholder"
            [class.error]="descriptionControl.invalid && descriptionControl.touched"
          />
          @if (descriptionControl.invalid && descriptionControl.touched) {
            <span class="error-message">{{ content().descriptionError }}</span>
          }
        </div>

        <div class="form-group">
          <label for="amount">💰 {{ content().amountLabel }}</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            formControlName="amount"
            placeholder="0.00"
            [class.error]="amountControl.invalid && amountControl.touched"
          />
          @if (amountControl.invalid && amountControl.touched) {
            <span class="error-message">{{ content().amountError }}</span>
          }
        </div>

        <div class="form-group">
          <label for="category">{{ content().categoryLabel }}</label>
          <select
            id="category"
            formControlName="category"
            [class.error]="categoryControl.invalid && categoryControl.touched"
          >
            <option value="">{{ content().categoryPlaceholder }}</option>
            @for (category of content().categories; track category) {
              <option [value]="category">{{ category }}</option>
            }
          </select>
          @if (categoryControl.invalid && categoryControl.touched) {
            <span class="error-message">{{ content().categoryError }}</span>
          }
        </div>

        <div class="form-group">
          <label for="date">{{ content().dateLabel }}</label>
          <input
            id="date"
            type="date"
            formControlName="date"
            [class.error]="dateControl.invalid && dateControl.touched"
          />
          @if (dateControl.invalid && dateControl.touched) {
            <span class="error-message">{{ content().dateError }}</span>
          }
        </div>

        <button 
          type="submit" 
          [disabled]="expenseForm.invalid || isSubmitting()"
          class="submit-btn magical-button"
        >
          {{ isSubmitting() ? '🪄 Processing...' : content().addButton }}
        </button>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      padding: 28px;
      margin-bottom: 24px;
      position: relative;
      background: linear-gradient(135deg, rgba(25, 25, 112, 0.95), rgba(72, 61, 139, 0.95));
      border: 3px solid #8b4513;
      color: #f4f4f4;
    }

    .form-container::after {
      content: '🦉';
      position: absolute;
      top: 15px;
      right: 20px;
      font-size: 1.5rem;
      opacity: 0.7;
    }

    h2 {
      margin: 0 0 28px 0;
      color: #ffd700;
      font-size: 1.6rem;
      font-weight: 700;
      font-family: 'Cinzel Decorative', serif;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
      text-align: center;
    }

    .form-group {
      margin-bottom: 24px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #ffd700;
      font-weight: 600;
      font-size: 1rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    input,
    select {
      width: 100%;
      padding: 14px 16px;
      border: 2px solid #8b4513;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
      background: rgba(25, 25, 112, 0.8);
      color: #f4f4f4;
      font-family: 'Cinzel', serif;
    }

    input::placeholder {
      color: #b8b8b8;
      font-style: italic;
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: #ffd700;
      box-shadow: 
        0 0 15px rgba(255, 215, 0, 0.4),
        inset 0 2px 4px rgba(0, 0, 0, 0.2);
      background: rgba(25, 25, 112, 0.9);
    }

    input.error,
    select.error {
      border-color: #dc143c;
      box-shadow: 0 0 10px rgba(220, 20, 60, 0.4);
    }

    .error-message {
      color: #ff6b6b;
      font-size: 0.9rem;
      margin-top: 6px;
      display: block;
      font-weight: 500;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .magical-button {
      background: linear-gradient(135deg, #8b4513, #daa520, #ffd700);
      color: #1a1a2e;
      border: 2px solid #8b4513;
      padding: 16px 32px;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      font-family: 'Cinzel', serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      overflow: hidden;
    }

    .magical-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: left 0.5s;
    }

    .magical-button:hover:not(:disabled)::before {
      left: 100%;
    }

    .magical-button:hover:not(:disabled) {
      background: linear-gradient(135deg, #daa520, #ffd700, #ffff00);
      transform: translateY(-2px);
      box-shadow: 
        0 8px 25px rgba(255, 215, 0, 0.4),
        0 0 20px rgba(255, 215, 0, 0.3);
    }

    .magical-button:disabled {
      background: linear-gradient(135deg, #555, #777);
      color: #999;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    select option {
      background: #1a1a2e;
      color: #f4f4f4;
      padding: 8px;
    }
  `]
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
