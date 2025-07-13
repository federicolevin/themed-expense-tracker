import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../services/expense.service';
import { EXPENSE_CATEGORIES } from '../models/expense.model';

@Component({
  selector: 'app-expense-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="form-container">
      <h2>Add New Expense</h2>
      <form [formGroup]="expenseForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="description">Description</label>
          <input
            id="description"
            type="text"
            formControlName="description"
            placeholder="Enter expense description"
            [class.error]="descriptionControl.invalid && descriptionControl.touched"
          />
          @if (descriptionControl.invalid && descriptionControl.touched) {
            <span class="error-message">Description is required</span>
          }
        </div>

        <div class="form-group">
          <label for="amount">Amount ($)</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            formControlName="amount"
            placeholder="0.00"
            [class.error]="amountControl.invalid && amountControl.touched"
          />
          @if (amountControl.invalid && amountControl.touched) {
            <span class="error-message">Valid amount is required</span>
          }
        </div>

        <div class="form-group">
          <label for="category">Category</label>
          <select
            id="category"
            formControlName="category"
            [class.error]="categoryControl.invalid && categoryControl.touched"
          >
            <option value="">Select a category</option>
            @for (category of categories; track category) {
              <option [value]="category">{{ category }}</option>
            }
          </select>
          @if (categoryControl.invalid && categoryControl.touched) {
            <span class="error-message">Category is required</span>
          }
        </div>

        <div class="form-group">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            formControlName="date"
            [class.error]="dateControl.invalid && dateControl.touched"
          />
          @if (dateControl.invalid && dateControl.touched) {
            <span class="error-message">Date is required</span>
          }
        </div>

        <button 
          type="submit" 
          [disabled]="expenseForm.invalid || isSubmitting()"
          class="submit-btn"
        >
          {{ isSubmitting() ? 'Adding...' : 'Add Expense' }}
        </button>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }

    h2 {
      margin: 0 0 24px 0;
      color: #2c3e50;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 6px;
      color: #34495e;
      font-weight: 500;
      font-size: 0.9rem;
    }

    input,
    select {
      width: 100%;
      padding: 12px;
      border: 2px solid #e1e8ed;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.2s ease;
      box-sizing: border-box;
    }

    input:focus,
    select:focus {
      outline: none;
      border-color: #3498db;
    }

    input.error,
    select.error {
      border-color: #e74c3c;
    }

    .error-message {
      color: #e74c3c;
      font-size: 0.85rem;
      margin-top: 4px;
      display: block;
    }

    .submit-btn {
      background: #3498db;
      color: white;
      border: none;
      padding: 14px 28px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      width: 100%;
    }

    .submit-btn:hover:not(:disabled) {
      background: #2980b9;
      transform: translateY(-1px);
    }

    .submit-btn:disabled {
      background: #bdc3c7;
      cursor: not-allowed;
      transform: none;
    }
  `]
})
export class ExpenseFormComponent {
  private fb = inject(FormBuilder);
  private expenseService = inject(ExpenseService);

  categories = EXPENSE_CATEGORIES;
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
