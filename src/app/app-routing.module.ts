import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadAdminGuard } from './can-load-admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [CanLoadAdminGuard]
  },
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
