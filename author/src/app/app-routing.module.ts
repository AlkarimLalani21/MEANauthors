import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './homepage/update/update.component';
import { DetailsComponent } from './homepage/details/details.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './homepage/create/create.component'


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'homepage/update/:id', component: UpdateComponent },
  { path: 'homepage/details/:id', component: DetailsComponent },
  { path: 'homepage/new', component: CreateComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }