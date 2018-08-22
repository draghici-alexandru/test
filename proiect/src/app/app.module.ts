import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
/* TODO:
  using tsconfig to add relative paths to the project does not require to create an
  index.ts file. You can import CoreModule from 'app/core'. Same for SharedModule.
  The index.ts file from the app folder is not necessary, you can remove it.
*/

/* TODO:
  The cli generates a folter for each module/component we want it to add to the project.
  Sometimes, this is not required. This is the case for the routing modules (AppRoutingModule).
  Take the approuting.module.ts file and move it to app folder. Delete the approuting folder and the rest of the files.
 */

/* TODO:
  Generating modules/component using the cli has some rules regarding naming. We want that module to be named
  AppRoutingModule, not ApproutingModule. To make the cli do that, you can use these options:
    - ng generate module app-routing
    - ng generate module appRouting
    (use dash or camel case to distinguish different words)
  Please rename this module to AppRoutingModule and the files and folder to app-routing.module
 */

/* TODO:
  You forgot to add the services folder inside core. Do not forget to add the index.ts file too inside the services folder,
  leave it empty as we do not have anything in that folder for now, but export all from services->index.ts into core->index.ts
 */

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
