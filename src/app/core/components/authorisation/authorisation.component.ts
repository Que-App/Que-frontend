import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';


import { AuthenticationService } from 'src/app/auth/services/authentication.service'

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent implements OnInit {
  loading: boolean = false;
  version: string = this.globals.VERSION;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});


  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private globals: Globals
    ) { }

  ngOnInit() {}

  logIn(form: NgForm) {
    this.loading = true;

    this.authenticationService.logIn(form.value.username, form.value.password).subscribe(
      () => this.router.navigateByUrl('schedule'),
      error => this.loading = false
    );
  }
}
