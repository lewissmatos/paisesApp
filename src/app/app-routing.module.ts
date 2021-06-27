import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './pages/capital/capital.component';
import { NameComponent } from './pages/name/name.component';
import { RegionComponent } from './pages/region/region.component';

const routes: Routes = [
  { path: 'name', component: NameComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'region', component: RegionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'name' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
