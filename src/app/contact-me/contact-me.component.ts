import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailJSResponseStatus } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  form: FormGroup = this.fb.group({
    from_name: new FormControl('', Validators.required), 
    from_email: new FormControl('', [Validators.required, Validators.email ]) ,
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  sendEmail() {
    if (this.form.value.from_email != '' && this.form.controls['from_email'].errors) {
      this.form.controls['from_email'].setErrors({'incorrect': true});
      this.toastr.warning('Please enter a valid email address', '', { toastClass: 'toast-warning' });
    } 
    if (this.form.invalid) {
      this.toastr.error('Please complete all required fields', '' , { toastClass: 'toast-error'});
      return;
    } else {
      emailjs.init('gNFAq2zDWmfLGhzLj');
      let response = emailjs.send('service_0v38nv6', 'template_3em0swm', {
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message
      });
      this.toastr.success('Form has been successfully submitted', '' , { toastClass: 'toast-success'});
    }
      this.form.reset();
  }

}


