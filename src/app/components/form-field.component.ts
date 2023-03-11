/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'jobzella-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ` <div class="relative h-12 w-full min-w-[200px]">
    <div
    *ngIf="suffix"
    (click)="clickSuffix()"
      class="absolute cursor-pointer top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-icongray"
    >
      <i aria-hidden="true">
        <img [src]="'assets/' + suffix + '.svg'" />
      </i>
    </div>
    <div
    *ngIf="prefix"
      class="absolute top-2/4 left-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-icongray"
    >
      <i aria-hidden="true">
        <img [src]="'assets/' + prefix + '.svg'" />
      </i>
    </div>
    <input
      class="peer h-full w-full rounded-lg border border-gray22 border-t-transparent bg-transparent px-8 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray22 placeholder-shown:border-t-gray22 focus:border-2 focus:border-urlcyan focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      [ngModel]="value"
      (ngModelChange)="onChange($event)"
      (click)="onTouch()"
      [placeholder]="placeHolder"
      [type]="type"
    />
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray 38 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-8 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray22 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-8 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray22 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-gray 38 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-urlcyan peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-urlcyan peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-urlcyan peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray 38 text-gray38"
    >
      {{ label }}
    </label>
  </div>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormFieldComponent,
      multi: true,
    },
  ],
})
export class FormFieldComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() placeHolder = '';
  @Input() label!: string;
  @Input() suffix!: string;
  @Input() prefix!: string;

  @Output() suffixClick = new EventEmitter<string>()
  value!: string;

  clickSuffix() {
    this.suffixClick.emit()
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDisabledState?(isDisabled: boolean): void {}
}
