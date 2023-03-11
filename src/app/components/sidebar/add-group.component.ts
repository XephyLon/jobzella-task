import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'jobzella-add-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section
      class="flex justify-between items-center px-4 w-full h-14 bg-[#00587A33] "
    >
      <h1 class="font-bold text-2xl">Add Group</h1>
      <button (click)="close()">
        <i><img src="assets/x.svg" /></i>
      </button>
    </section>

    <form [formGroup]="addGroupForm" class="flex flex-col px-4 mt-6">
      <p class="text-lg font-semibold text-[#373F51]">
        Name <span class="text-red-500">*</span>
      </p>
      <input
        class="bg-[#F5F6F6] rounded-md mt-2 min-h-[48px] mb-4 px-4"
        formControlName="name"
        type="text"
        placeholder="Jobzella"
      />

      <button class="btn w-[260px] rounded-2xl self-center mb-11">
        Add Group
      </button>
    </form>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: white;
        border-radius: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddGroupComponent implements OnInit {
  addGroupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(DIALOG_DATA) data: any,
    public dialogRef: DialogRef
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.addGroupForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.min(3),
          Validators.max(150),
          Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/),
        ],
      ],
    });
  }
}
