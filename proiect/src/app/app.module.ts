import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApproutingModule, CoreModule, SharedModule, AuthenticationModule } from './index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    CoreModule,
    SharedModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
