import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageConfirmationComponent } from './message-confirmation/message-confirmation.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule, RouterLink, ReactiveFormsModule, MessageConfirmationComponent],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', './contact-form.component.scss', './contact-checkbox.component.scss'],
})
export class ContactMeComponent {
  http = inject(HttpClient);

  contactData = this.fb.group ({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacyAccepted: [false, Validators.requiredTrue]
  });

  mailTest = true;
  submitted = false;

  post = {
    endPoint: 'https://portfolio.jonas-stiefer.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.submitted = true;
    if (this.contactData.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData.value), this.post.options)
        .subscribe({
          next: (response) => {            
            this.contactData.reset();
            setTimeout(() => {
              this.submitted = false;
            }, 3000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (this.contactData.valid && this.mailTest) {
      console.log(this.contactData.value);
      this.contactData.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }
}
