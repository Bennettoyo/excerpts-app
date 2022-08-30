import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EntryComponent } from './entry/entry.component';
import { ExcerptListComponent } from './excerpt-list/excerpt-list.component';

const routes: Routes = [
  { path: 'entry', component: EntryComponent },
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'excerpts', component: ExcerptListComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  // { path: '**', redirectTo: 'entry' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
