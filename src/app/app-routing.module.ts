import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeViewComponent} from './home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
