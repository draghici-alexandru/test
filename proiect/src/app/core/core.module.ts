import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services';
import { AuthGuardService } from './guards';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UserService, AuthGuardService]
})
export class CoreModule { }
