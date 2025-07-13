import { Component, ChangeDetectionStrategy, inject, computed, signal, effect, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../services/tour.service';

@Component({
  selector: 'app-tour-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    @if (tourService.isActive()) {
      <div class="tour-overlay">
        <!-- Backdrop with hole for highlighted element -->
        <div class="tour-backdrop" 
             [style.--highlight-top]="highlightPosition().top + 'px'"
             [style.--highlight-left]="highlightPosition().left + 'px'"
             [style.--highlight-width]="highlightPosition().width + 'px'"
             [style.--highlight-height]="highlightPosition().height + 'px'">
        </div>

        <!-- Tour tooltip -->
        @if (tourService.currentTourStep(); as step) {
          <div class="tour-tooltip"
               [class]="'tour-tooltip--' + step.position"
               [style.top]="tooltipPosition().top + 'px'"
               [style.left]="tooltipPosition().left + 'px'"
               #tooltip>
            
            <div class="tour-tooltip__header">
              <div class="tour-tooltip__icon">{{ step.icon }}</div>
              <h3 class="tour-tooltip__title">{{ step.title }}</h3>
              <button class="tour-tooltip__close" (click)="tourService.skipTour()">
                ✕
              </button>
            </div>

            <div class="tour-tooltip__content">
              <p class="tour-tooltip__description">{{ step.description }}</p>
            </div>

            <div class="tour-tooltip__footer">
              <div class="tour-tooltip__progress">
                <span class="tour-tooltip__step-counter">
                  {{ tourService.currentStep() + 1 }} / {{ tourService.tourSteps().length }}
                </span>
                <div class="tour-tooltip__progress-bar">
                  <div class="tour-tooltip__progress-fill"
                       [style.width]="progressPercentage() + '%'">
                  </div>
                </div>
              </div>

              <div class="tour-tooltip__buttons">
                @if (!tourService.isFirstStep()) {
                  <button class="tour-btn tour-btn--secondary" 
                          (click)="tourService.previousStep()">
                    {{ tourService.tourButtons().previous }}
                  </button>
                }
                
                <button class="tour-btn tour-btn--skip" 
                        (click)="tourService.skipTour()">
                  {{ tourService.tourButtons().skip }}
                </button>

                @if (tourService.isLastStep()) {
                  <button class="tour-btn tour-btn--primary" 
                          (click)="tourService.completeTour()">
                    {{ tourService.tourButtons().finish }}
                  </button>
                } @else {
                  <button class="tour-btn tour-btn--primary" 
                          (click)="tourService.nextStep()">
                    {{ tourService.tourButtons().next }}
                  </button>
                }
              </div>
            </div>
          </div>
        }
      </div>
    }
  `,
  styleUrl: './tour-overlay.component.scss'
})
export class TourOverlayComponent {
  tourService = inject(TourService);
  
  @ViewChild('tooltip') tooltipRef!: ElementRef<HTMLElement>;

  private highlightElement = signal<Element | null>(null);
  
  readonly highlightPosition = computed(() => {
    const element = this.highlightElement();
    if (!element) {
      return { top: 0, left: 0, width: 0, height: 0 };
    }
    
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  });

  readonly tooltipPosition = computed(() => {
    const step = this.tourService.currentTourStep();
    const highlight = this.highlightPosition();
    
    if (!step) {
      return { top: 0, left: 0 };
    }

    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // On mobile, always position at bottom
      return {
        top: window.innerHeight - 280, // Fixed position from bottom
        left: 20
      };
    }

    const padding = 20;
    const tooltipWidth = 300;
    const tooltipHeight = 220; // Approximate height
    let top = 0;
    let left = 0;

    // Try preferred position first
    switch (step.position) {
      case 'top':
        top = highlight.top - tooltipHeight - padding;
        left = highlight.left + highlight.width / 2 - tooltipWidth / 2;
        break;
      case 'bottom':
        top = highlight.top + highlight.height + padding;
        left = highlight.left + highlight.width / 2 - tooltipWidth / 2;
        break;
      case 'left':
        top = highlight.top + highlight.height / 2 - tooltipHeight / 2;
        left = highlight.left - tooltipWidth - padding;
        break;
      case 'right':
        top = highlight.top + highlight.height / 2 - tooltipHeight / 2;
        left = highlight.left + highlight.width + padding;
        break;
    }

    // Smart positioning: if tooltip goes outside viewport, try alternative positions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Check if tooltip goes outside right edge
    if (left + tooltipWidth + 10 > viewportWidth) {
      if (step.position === 'right') {
        // Try left position instead
        left = highlight.left - tooltipWidth - padding;
      } else {
        // Adjust to fit within right edge
        left = viewportWidth - tooltipWidth - 10;
      }
    }
    
    // Check if tooltip goes outside left edge
    if (left < 10) {
      if (step.position === 'left') {
        // Try right position instead
        left = highlight.left + highlight.width + padding;
      } else {
        left = 10;
      }
    }
    
    // Check if tooltip goes outside bottom edge
    if (top + tooltipHeight + 10 > viewportHeight) {
      if (step.position === 'bottom') {
        // Try top position instead
        top = highlight.top - tooltipHeight - padding;
      } else {
        // Position above the highlight
        top = Math.max(10, highlight.top - tooltipHeight - padding);
      }
    }
    
    // Check if tooltip goes outside top edge
    if (top < 10) {
      if (step.position === 'top') {
        // Try bottom position instead
        top = highlight.top + highlight.height + padding;
      } else {
        top = 10;
      }
    }

    // Final check: ensure it's within viewport
    left = Math.max(10, Math.min(left, viewportWidth - tooltipWidth - 10));
    top = Math.max(10, Math.min(top, viewportHeight - tooltipHeight - 10));

    return { top, left };
  });

  readonly progressPercentage = computed(() => {
    const current = this.tourService.currentStep() + 1;
    const total = this.tourService.tourSteps().length;
    return (current / total) * 100;
  });

  constructor() {
    // Update highlighted element when tour step changes
    effect(() => {
      const step = this.tourService.currentTourStep();
      if (step) {
        this.updateHighlightElement(step.target);
      }
    });

    // Scroll highlighted element into view
    effect(() => {
      const element = this.highlightElement();
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'center'
        });
      }
    });

    // Handle window resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        // Force recomputation of tooltip position
        const currentStep = this.tourService.currentTourStep();
        if (currentStep) {
          this.updateHighlightElement(currentStep.target);
        }
      });
    }
  }

  private updateHighlightElement(selector: string): void {
    setTimeout(() => {
      const element = document.querySelector(selector);
      this.highlightElement.set(element);
    }, 100); // Small delay to ensure DOM is updated
  }
}
