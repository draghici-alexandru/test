import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApproutingModule, CoreModule, SharedModule } from './index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
