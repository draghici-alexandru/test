import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent, LoginComponent } from 'app/authentication';
import { PageNotFoundComponent } from 'app/shared';
import { DashboardComponent } from 'app/dashboard';
import { AuthGuardService as AuthGuard } from 'app/core';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule', canActivate: [AuthGuard]},
  { path: '**',  component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
