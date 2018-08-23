import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appEmailConfirming]'
})
export class EmailConfirmingDirective {

  constructor() { 
    emailConfirming(c: AbstractControl): { invalid: boolean } {
      if (c.get('email').value !== c.get('confirm_email').value) {
          return {invalid: true};
      }
  }
  }

}
