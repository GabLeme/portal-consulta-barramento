import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ConsultResourceComponent } from 'src/app/consult-resource/consult-resource.component';

const routes: Routes = [
  { path: 'consult-resource', component: ConsultResourceComponent}
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
