import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  error_message: string = this.translate.instant('error_message');
  warning_message: string = this.translate.instant('warning_message');
  success_message: string = this.translate.instant('success_message');

  form: FormGroup = this.fb.group({
    from_name: new FormControl('', Validators.required), 
    from_email: new FormControl('', [Validators.required, Validators.email ]) ,
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder, private toastr: ToastrService, private translate: TranslateService) { }

  sendEmail() {
    if (this.form.value.from_email != '' && this.form.controls['from_email'].errors) {
      this.form.controls['from_email'].setErrors({'incorrect': true});
      this.translate.get('warning_message').subscribe((res) => {
        this.toastr.warning(res, '',  { toastClass: 'toast-warning'})
      })
    } 
    if (this.form.invalid) {
      this.translate.get('error_message').subscribe((res) => {
        this.toastr.error(res, '',  { toastClass: 'toast-error'})
      })
      return;
    } else {
      emailjs.init('gNFAq2zDWmfLGhzLj');
      let response = emailjs.send('service_0v38nv6', 'template_3em0swm', {
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message
      });
      this.translate.get('success_message').subscribe((res) => {
        this.toastr.success(res, '',  { toastClass: 'success-error'})
      })
    }
      this.form.reset();
  }

}


