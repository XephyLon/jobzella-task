import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';

@Component({
  selector: 'jobzella-task-board',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-board.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskBoardComponent {

  /**
   * Sets the general color for the whol board including the colors
   * Defaults to black
   * @memberof TaskBoardComponent
   */
  @Input() accentColor = '#000000'

}
