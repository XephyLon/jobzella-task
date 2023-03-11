import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { TopbarComponent } from 'src/app/components/topbar/topbar.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar.component';
import { TaskBoardComponent } from 'src/app/components/task-board/task-board.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AddTaskComponent } from './add-task.component';

@Component({
  selector: 'jobzella-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    ProgressBarComponent,
    TaskBoardComponent,
    DialogModule
  ],
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.3fr 1.7fr 1fr;
        gap: 12px 12px;
        grid-auto-flow: row;
        grid-template-areas:
          'progress-bar progress-bar progress-bar'
          'todo on-progress done'
          'todo on-progress done';
      }

      .progress-bar {
        grid-area: progress-bar;
      }

      .todo {
        grid-area: todo;
      }

      .on-progress {
        grid-area: on-progress;
      }

      .done {
        grid-area: done;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor( public dialog: Dialog) {}

  addTask() {
    this.dialog.open(AddTaskComponent, {
      width: '570px',
    })
  }
}
