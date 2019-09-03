import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ConsultResourceComponent } from 'src/app/consult-resource/consult-resource.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'consult-resource', component: ConsultResourceComponent},
  { path: 'dashboard', component: DashboardComponent}
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
