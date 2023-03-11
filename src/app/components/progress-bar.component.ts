import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jobzella-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col">
      <p class="text-xs text-[#323338] mb-2"><ng-content></ng-content></p>
      <section class="flex items-center w-full">
        <!-- NOTE: For the sake of reusability, the background color for the progress bar will not match the design's
              This would usually be handled within a well-defined color palette and a component designed to match it -->
        <div
          class="flex-start flex h-2.5 rounded-lg w-full overflow-hidden bg-blue-gray-50 font-sans text-xs font-medium"
          [style]="'background-color: ' + color + '20'"
        >
          <div
            class="flex h-full rounded-lg items-baseline justify-center overflow-hidden break-all text-white"
            [style]="'width: ' + progress + '%; background-color: ' + color"
          ></div>
        </div>

        <div
          *ngIf="rating"
          class="text-gold h-3 flex-[40%] justify-end ml-5 flex items-center"
        >
          <i><img src="assets/star.svg" /></i>
          <!-- NOTE: This should be dynamic in a real application with more logic to handle progression quotes -->
          <p class="text-xs">Good job!</p>
        </div>
      </section>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  /**
   * Sets the progress bar percentage between 0-100
   * Defaults to `0`
   * @memberof ProgressBarComponent
   */
  @Input() progress = '0';

  /**
   * Whether or not the rating star and quotes should be visible.
   * Defaults to `true`
   * @memberof ProgressBarComponent
   */
  @Input() rating = true;

  /**
   * Sets the primary color for the progress bar as well as the lighter background color
   * Defaults to primary color
   * @memberof ProgressBarComponent
   */
  @Input() color = '#00587A'
}
