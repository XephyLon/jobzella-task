import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldComponent } from 'src/app/components/form-field.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'jobzella-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent, AsyncPipe],
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  isPasswordVisible = 'password';

  togglePasswordVisibility() {
    this.isPasswordVisible =
      this.isPasswordVisible === 'password' ? 'text' : 'password';
  }

  login(payload: { email: string; password: string }) {
    return this.loginService.login(payload);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.max(320)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/
          ),
        ],
      ],
    });
  }
}
