import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


import { AuthenticationService } from 'src/app/auth/services/authentication.service'

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});


  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {}

  logIn(form: NgForm) {
    this.authenticationService.logIn(form.value.username, form.value.password);
  }
}
