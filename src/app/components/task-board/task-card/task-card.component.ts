import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../progress-bar.component';

@Component({
  selector: 'jobzella-task-card',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './task-card.component.html',
  styles: [
    `
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        justify-content: space-between;
        justify-items: stretch;
        align-items: center;
        grid-template-areas:
          'title title dot-menu'
          'subtitle subtitle subtitle'
          'date . .'
          'collaborators . attachments'
          'progress-bar progress-bar progress-bar';
      }

      .title {
        grid-area: title;
      }

      .dot-menu {
        justify-self: end;
        grid-area: dot-menu;
      }

      .subtitle {
        grid-area: subtitle;
      }

      .date {
        grid-area: date;
      }

      .collaborators {
        grid-area: collaborators;
      }

      .attachments {
        justify-self: end;
        grid-area: attachments;
      }

      .progress-bar {
        grid-area: progress-bar;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
  @Input() color = '#000000'
  @Input() progress = '0'
}
