import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'jobzella-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full">
      <section
        class="flex justify-between items-center px-4 w-full h-14 bg-[#00587A33] "
      >
        <h1 class="font-bold text-2xl">Add Task</h1>
        <button (click)="close()">
          <i><img src="assets/x.svg" /></i>
        </button>
      </section>

      <form [formGroup]="addTaskForm" class="flex flex-col px-4 mt-6">
        <p class="text-lg font-semibold text-[#373F51]">
          Name <span class="text-red-500">*</span>
        </p>
        <input
          class="bg-[#F5F6F6] rounded-md mt-2 min-h-[48px] mb-4"
          formControlName="name"
          type="text"
        />

        <p class="text-lg font-semibold text-[#373F51]">Dexcription</p>
        <textarea
          class="bg-[#F5F6F6] rounded-md mt-2 min-h-[48px] mb-4"
          formControlName="description"
          cols="30"
          rows="5"
        ></textarea>

        <p class="text-lg font-semibold text-[#373F51] mb-3.5">
          Choose Status <span class="text-red-500">*</span>
        </p>
        <div class="text-p flex items-center gap-11 mb-11">
          <div class="flex items-center">
            <input
              type="radio"
              value="0"
              name="status"
              formControlName="taskStatus"
              id="todo"
              class="w-6 h-6 text-p bg-gray-100 border-gray-300 focus:ring-p  focus:ring-2"
            />
            <label for="todo" class="ml-2 text-sm font-medium text-p"
              >To Do</label
            >
          </div>

          <div class="flex items-center justify-around">
            <input
              type="radio"
              value="1"
              name="status"
              formControlName="taskStatus"
              id="inprogress"
              class="w-6 h-6 text-p bg-gray-100 border-gray-300 focus:ring-p  focus:ring-2"
            />
            <label for="inprogress" class="ml-2 text-sm font-medium text-p"
              >In Progress</label
            >
          </div>

          <div class="flex items-center">
            <input
              type="radio"
              value="2"
              name="status"
              formControlName="taskStatus"
              id="done"
              class="w-6 h-6 text-p bg-gray-100 border-gray-300 focus:ring-p  focus:ring-2"
            />
            <label for="done" class="ml-2 text-sm font-medium text-p"
              >Done</label
            >
          </div>
        </div>

        <button class="btn w-[260px] rounded-2xl self-center mb-11">
          Add Task
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent implements OnInit {
  addTaskForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(DIALOG_DATA) public data: any,
    public dialogRef: DialogRef
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.max(100),
          Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/),
        ],
      ],
      description: [
        '',
        [
          Validators.max(500),
          Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/),
        ],
      ],
      taskStatus: [0, [Validators.required]],
    });
  }
}
