import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  ;
  constructor(private auth$: AuthService, public fb: FormBuilder) {
    this.form = this.fb.group({

      email: ["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {
  }
  login() {
    if(!this.form.valid) {
      console.log("not valid")
    } else {
      this.auth$.signUp(this.form.value)
      console.log(this.form.value)
    }

  }

}
