import {
    AbstractControl,
    ValidatorFn,
    FormControl,
    ValidationErrors,
    FormGroup
  } from '@angular/forms';
  
export const validarQueSeanIguales: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get("password")
    const confirmarPassword = control.get("passwordconfirm")
  
    return password?.value === confirmarPassword?.value
      ? null
      : { noSonIguales: true }
  }