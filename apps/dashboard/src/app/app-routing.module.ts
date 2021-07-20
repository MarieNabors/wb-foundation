import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';
import { ContentComponent } from './content/content.component'

const routes: Routes = [
  {path: 'projects', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'},
  {path: 'login', component: LoginComponent},
  {path: 'login', redirectTo: '', pathMatch: 'full'},
  // {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: '', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
