import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent, LoginComponent } from 'app/authentication';
import { PageNotFoundComponent } from 'app/shared';
import { AuthGuardService as AuthGuard } from 'app/core';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: '**',  component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
