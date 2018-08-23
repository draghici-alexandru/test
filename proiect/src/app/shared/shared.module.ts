import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmailConfirmingDirective, PasswordConfirmingDirective } from './directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, EmailConfirmingDirective, PasswordConfirmingDirective]
})
export class SharedModule { }
