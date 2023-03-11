import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { AddGroupComponent } from './add-group.component';

@Component({
  selector: 'jobzella-sidebar',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .sidemenu-btn {
        @apply flex flex-row gap-4 items-center text-lg text-[#8D8D8D] h-12 rounded-lg hover:bg-[#00587A0D] transition-all hover:text-black hover:font-bold;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(public dialog: Dialog) {}

  addGroup() {
    this.dialog.open(AddGroupComponent, {
      width: '569px',
    });
  }
}
