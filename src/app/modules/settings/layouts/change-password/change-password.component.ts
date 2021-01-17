import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/data/api/user-api.service';
import { SnackBarHandlerService } from 'src/app/shared/services/snack-bar-handler.service';
import { SettingsSidebarOptionName } from '../../components/settings-navbar/settings-navbar.component';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  settingsSidebarVerfier: SettingsSidebarOptionName = SettingsSidebarOptionName.CHANGE_PSSWD;
  
  formGroup: FormGroup = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmedNewPassword: new FormControl('', [Validators.required, this.passwordMatch]),
  });

  constructor(
    private userApi: UserApiService,
    private snackBar: SnackBarHandlerService
  ) { }

  ngOnInit(): void {
    (this.formGroup.get('newPassword') as FormControl).valueChanges.subscribe(() => {
      this.formGroup.get('confirmedNewPassword').updateValueAndValidity();
    });
  }

  passwordMatch(control: AbstractControl){
    let newPaswd = control.root.get('newPassword');
    if (newPaswd && control.value != newPaswd.value) return { passwordMatch: false };   
    return null;
}

  changePassword(form: NgForm, formDirective: FormGroupDirective): void {
    this.userApi.changePassword(form.value.currentPassword, form.value.newPassword)
      .subscribe(response => {
        if (response.status === 200) {
          this.snackBar.openBasicSnackBar("Password has been changed successfully.");
          formDirective.resetForm();
          this.formGroup.reset();
          
        }
        else if (response.status !== 403) this.snackBar.openErrorSnackBar("Something went wrong.")
      });
  }

}
