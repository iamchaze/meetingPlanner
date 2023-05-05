import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './pages/packages/packages.component';
import { ActivatePackageComponent } from './pages/activate-package/activate-package.component';
import { ClientComponent } from './pages/client/client.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path:"package", component:PackagesComponent },
  { path:"activate-package", component:ActivatePackageComponent },
  { path:"client", component:ClientComponent },
  { path:"users", component:UsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
